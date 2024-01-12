interface Response{
    token: string;
    user: {
        name: string;
        email: string;
    }
}

export function signIn(): Promise<Response> {
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve({
                token: 'asdasffsjgnaepfm43424fsfhdfthfrnw2wfe',
                user: {
                    name: 'Diego',
                    email: 'diego@gmail.com',
                },
            });
        },2000);
    });
}
