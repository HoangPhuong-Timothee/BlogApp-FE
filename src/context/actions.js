export const LoginStart = (userCredential)=>({
    type: "START_LOGIN"
})

export const LoginFail = ()=>({
    type: "FAIL_LOGIN"
})

export const LoginSuccess = (user)=>({
    type: "SUCCESS_LOGIN",
    payload: user
}) 