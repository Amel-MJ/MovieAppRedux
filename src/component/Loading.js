import React from 'react'
import { Spin } from 'antd';
export default function loading() {
    return (
        <div className="loading">
          <div className="example">
          <Spin />
        </div>
        </div>
    )
}
