// import { API_BASE_URL } from "../../config/app"
// import parseError from "./parseError"
// import { getKeyByPath } from "./tools"
const baseUrl = "http://localhost:5001"

export const headers = new Headers()
headers.append("Content-Type", "application/json")
headers.append("Accept", "application/json")

export function setAuth(token) {
  headers.delete("Authorization")
  headers.append("Authorization", `Bearer ${token}`)
}


const signals = new Map()

async function http(
  path,
  method,
  body
) {
  let httpInit
  if (localStorage.getItem("token")) {
    headers.append("Authorization", `Bearer ${localStorage.getItem("token")}`)
    httpInit = {
      headers
    }
  } else {
    httpInit = {
      headers
    }
  }
  const controller = new AbortController()
  signals.set(path, controller)
  try {
    const response = await fetch(`${baseUrl}${path}`, {
      ...httpInit,
      method,
      signal: controller.signal,
      ...(body && { body: JSON.stringify(body) }), // or object
    })

    const data = await response.json()

    return { error: null, data }
  } catch (error) {
    return {
      error,
      data: null
    }
  }
}

export async function get(path) {
  return http(path, "GET")
}

export async function post(path, body) {
  return http(path, "POST", body)
}

export async function put(path, body) {
  return http(path, "PUT", body)
}
export async function patch(path, body) {
  return http(path, "PATCH", body)
}

export async function del(path) {
  return http(path, "DELETE")
}

export async function cancel(path, method, body = undefined) {
  const key = path
  signals.has(key) && signals.get(key).abort()
  return http(path, method, body)
}