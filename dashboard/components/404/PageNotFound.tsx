import Link from 'next/link'
import React from 'react'

export default function PageNotFoundPage() {
  return (
    <div style={{
        display: "flex",
        width: "100%",
        height: "80vh",
        textAlign: "center",
        justifyContent:"center"
    }}>
        <div style={{
            display: "flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column"
        }}>
            <h1 style={{
                fontSize: "50px",
                display: "inline-block",
                paddingRight: "12px",
                animation: "type .5s alternate infinite"
            }}>Error 404</h1>

            <Link href={"/"}><button style={{
                width:"130px",
                height:"30px",
                fontWeight:"bolder",
                cursor:"pointer"
            }}>Go Home</button></Link>
        </div>
    </div>
  )
}
