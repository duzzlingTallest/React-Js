import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;

export default function Body() {
    return (
        <>
            <div className='d-flex justify-content-between'>
                <Card className='mt-4 ms-4 '
                    hoverable
                    style={{
                        width: 240,
                    }}
                    cover={<img alt="example" src="https://www.bmw.in/content/dam/bmw/marketIN/bmw_in/all-models/m-series/M8-competition/m8-competition-coupe-header.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1664366514873.jpg" />}
                >
                    <Meta title="THE NEW BMW M8 COMPETITION COUPÉ IN COMPARISON." description="Price = 3,800,000.00" />
                </Card>

                <Card className='mt-4 ms-4 '
                    hoverable
                    style={{
                        width: 240,
                    }}
                    cover={<img alt="example" src="https://www.mercedes-benz.co.in/content/india/en/passengercars/models/cabriolet-roadster/r232-23-1/overview/_jcr_content/root/responsivegrid/tabs/tabitem/highlight/slider/image_661524872.component.damq6.3372643566415.jpg/MANUFAKTUR_spectral_blue_magno.jpg" />}
                >
                    <Meta title="Mercedes-AMG SL 55 4MATIC+ Roadster." description="Price = 23,500,000.00" />
                </Card>

                <Card className='mt-4 ms-4 '
                    hoverable
                    style={{
                        width: 240,
                    }}
                    cover={<img alt="example" src="https://files.porsche.com/filestore/image/multimedia/none/model-series-911-s-t-360-exterior-fallback/normal/db0a8e02-27ae-11ee-8103-005056bbdc38;sL;twebp;c1350;gc/porsche-normal.webp" />}
                >
                    <Meta title="911 S/T." description="Price = 42,620,000.00" />
                </Card>

                <Card className='mt-4 ms-4 '
                    hoverable
                    style={{
                        width: 240,
                    }}
                    cover={<img alt="example" src="https://www.audi.in/content/dam/nemo/models/audi-e-tron-gt/rs-e-tron-gt/my-2022/NeMo-Derivate-Startpage/market-introduction/feature-gallery/RSeGT_ae_2021_2376-desktop.jpg?imwidth=1920&imdensity=1" />}
                >
                    <Meta title="Audi RS e-tron GT RS e-tron GT." description="Price = 10,000,000.00" />
                </Card>

                <Card className='mt-4 ms-4 '
                    hoverable
                    style={{
                        width: 240,
                    }}
                    cover={<img alt="example" src="data:image/jpeg;base64,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" />}
                >
                    <Meta title="Ferrari SF90 Stradale." description="Price = 7,500,000.00" />
                </Card>

                <Card className='mt-4 ms-4 '
                    hoverable
                    style={{
                        width: 240,
                    }}
                    cover={<img alt="example" src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/3-7-5-bb-cullinan/page-properties/rolls-royce-black-badge-cullinan-product-page-single.jpg/jcr:content/renditions/cq5dam.web.1920.webp" />}
                >
                    <Meta title="BLACK BADGE CULLINAN." description="Price = 6,950,000" />
                </Card>
            </div>
        </>
    )
}
