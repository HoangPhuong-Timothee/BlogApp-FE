export const LoginStart = (userCredential)=>({
    type: "LOGIN_START"
})

export const LoginFail = ()=>({
    type: "LOGIN_FAIL"
})

export const LoginSuccess = (user)=>({
    type: "LOGIN_SUCCESS",
    payload: user
}) 