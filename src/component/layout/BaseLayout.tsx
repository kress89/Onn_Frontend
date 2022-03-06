import React, { PropsWithChildren } from 'react'

interface BaseLayoutProps{}
function BaseLayout({children}: PropsWithChildren<BaseLayoutProps>) {
    const style = {
        wrapper: {
            padding: "50px 25px 0",
        }
    }
    
    return (
        <div style={style.wrapper}>
            {children}
        </div>
    )
}

export default BaseLayout
