import { useRouter } from "next/router"
import { useEffect } from "react"
import { post } from "../../../utils/http"
import ActiveAccount from "../../../sections/User/ActiveAccount"
import showToast from "../../../components/Toast"

export default function Activar() {
  const router = useRouter()

  // eslint-disable-next-line camelcase
  useEffect(() => {
    if (!router.query.token) {
      return
    }
    // eslint-disable-next-line camelcase
    const activation_token = router.query.token
    post("/api/user/activation", {
      // eslint-disable-next-line camelcase
      activation_token
    })
      .then(res => {
        console.log("respToke:", res)
        if (
          res.data.name === "JsonWebTokenError" ||
          res.data.name === "TokenExpiredError"
        ) {
          showToast("Error al activar cuenta.", "JWT malformado", "error")
        }
      })
      .catch(respError => console.log("respError: ", respError))
  }, [router])
  return (
    <>
      <ActiveAccount router={router} />
    </>
  )
}
