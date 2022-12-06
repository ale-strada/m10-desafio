import Router from 'next/router'

async function deleteToken(){
  await localStorage.removeItem("auth-token")
}
export default function Logout() {

deleteToken().then(()=>{
  Router.push("/")
})
    return <p>hola</p>
}