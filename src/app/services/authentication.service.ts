import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || '{"id": null,"authdata": null}'));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): any {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        return this.http.get<any>(`${environment.apiUrl}/loginCredentials`)
            .pipe(map(async (loginCredentials) => {
                let loggedInUser = JSON.parse('{"id": null, "authdata": null}');

                await Promise.all(loginCredentials.map((loginCredential: any) => {
                    console.log(loginCredential);
                    if(loginCredential.username === username && loginCredential.password === password) {
                        this.http.get<any>(`${environment.apiUrl}/users/${loginCredential.fkUserId}`).subscribe((user: any) => {
                            let processedUser = JSON.parse('{}');

                            processedUser.id = loginCredential.fkUserId;
                            processedUser.authdata = window.btoa(username + ':' + password);
                            processedUser.userType = user.userType;
                            processedUser.parentId = user.fkParentId;
                            processedUser.studentId = user.fkStudentId;
                            processedUser.username = username;

                            localStorage.setItem('currentUser', JSON.stringify(processedUser));
                            this.currentUserSubject.next(processedUser); 

                            // processedUser content
                            // {
                            //      "authdata": ... 
                            //      "id": ... 
                            // }
                            //

                            console.log(processedUser);
                            loggedInUser = processedUser;
                        })
                    }
                }));

                return loggedInUser;
            }));
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(JSON.parse('{"id": null,"authdata": null}'));
    }
}