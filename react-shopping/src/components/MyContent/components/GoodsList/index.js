import React from 'react'
import { Card, Col, Row } from 'antd'
const { Meta } = Card

const GoodsList = ({ goods }) => (
  <div>
    <Row gutter={16}>
      {
        goods.map(e => (
        <Col xxl={4} xl={6} lg={8} sm={12} key={e.id}>
          <Card
            hoverable
            style={{ width: 240, margin: '0 auto', marginBottom: '20px' }}
            cover={<img alt="example" src={e.image} />}
          >
            <Meta
              title={e.name}
              description={(
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <span>{`¥${e.price}`}</span>
                  <span>{`评价${e.comment}`}</span>
                </div>
              )}
            />
          </Card>
        </Col>
      ))
    }
    </Row>
  </div>
)

export default GoodsList
