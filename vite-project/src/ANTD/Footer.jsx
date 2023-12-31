import React from 'react'
import "./Footer.css"

export default function Footer() {
    return (
        <>
            <head>
                <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <title>Untitled</title>
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css" />
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css" />
                                <link rel="stylesheet" href="assets/css/style.css" />
                                </head>
                                <div>
                                    <body>
                                        <div className="footer-dark">
                                            <footer>
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-sm-6 col-md-3 item">
                                                            <h3>Services</h3>
                                                            <ul>
                                                                <li><a href="#">Web design</a></li>
                                                                <li><a href="#">Development</a></li>
                                                                <li><a href="#">Hosting</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-sm-6 col-md-3 item">
                                                            <h3>About</h3>
                                                            <ul>
                                                                <li><a href="#">Company</a></li>
                                                                <li><a href="#">Team</a></li>
                                                                <li><a href="#">Careers</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-md-6 item text">
                                                            <h3>Car World..</h3>
                                                            <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                                                        </div>
                                                        <div className="col item social">
                                                            <a href="#"><i className="icon ion-social-facebook"></i></a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-snapchat"></i></a><a href="#"><i className="icon ion-social-instagram"></i></a>
                                                        </div>
                                                    </div>
                                                    <p className="copyright">Car Comapney © 2018</p>
                                                </div>
                                            </footer>
                                        </div>
                                        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                                        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
                                    </body>
                                </div>
                            </>
                            )
}
