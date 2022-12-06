import Router from 'next/router'

export default function Logout() {
  localStorage.removeItem("auth-token")
  Router.push("/")
    return <p>hola</p>
}