import axios from "../axios";
import { ACCESS_TOKEN } from "../../constants/token";

export function fetchOrders(sessionToken) {
  return axios.get("/product/orders", {
    headers: { Authorization: sessionToken },
  });
}

export function cancelOrder(dto, receiverPhoneNumber) {
  axios
    .post("/product/orders/cancel", JSON.stringify(dto), {
      headers: {
        Authorization: sessionStorage.getItem(ACCESS_TOKEN)
          ? sessionStorage.getItem(ACCESS_TOKEN)
          : receiverPhoneNumber,
        "Content-Type": `application/json`,
      },
    })
    .then((response) => {
      console.log("Response:", response.data);
      alert(response.data.message);
      window.location.href = "/inquiry";
    })
    .catch((e) => {
      if (e.response) {
        console.log("Error:", e.response.data);
        if (e.response.status === 400)
          alert(
            "DTO 문제 또는 이미 주문 취소한 경우 또는 주문 상태가 ORDERED 이상입니다"
          );
        else if (e.response.status === 401)
          alert("JWT 토큰이 유효하지 않습니다");
        else if (e.response.status === 403) alert("요청자의 주문이 아닙니다");
        else if (e.response.status === 404)
          alert("요청 주문이 존재하지 않습니다");
        else if (e.response.status === 500) alert("서버 내부 오류");
      }
    });
}
