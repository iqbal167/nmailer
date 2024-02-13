var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "",
    pass: ""
  }
});
var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  html: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

function template() {
  return `<!doctype html>
<html>

<head>
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:700&display=swap" rel="stylesheet" type="text/css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" type="text/css">
    <style>
        @media only screen and (max-width: 620px) {
            table[class=body] h1 {
                font-size: 28px !important;
                margin-bottom: 10px !important;
            }

            table[class=body] p,
            table[class=body] ul,
            table[class=body] ol,
            table[class=body] td,
            table[class=body] span,
            table[class=body] a {
                font-size: 16px !important;
            }

            table[class=body] .wrapper,
            table[class=body] .article {
                padding: 10px !important;
            }

            table[class=body] .content {
                padding: 0 !important;
            }

            table[class=body] .container {
                padding: 0 !important;
                width: 100% !important;
            }

            table[class=body] .main {
                border-left-width: 0 !important;
                border-radius: 0 !important;
                border-right-width: 0 !important;
            }

            table[class=body] .btn table {
                width: 100% !important;
            }

            table[class=body] .btn a {
                width: 100% !important;
            }

            table[class=body] .img-responsive {
                height: auto !important;
                max-width: 100% !important;
                width: auto !important;
            }
        }

        @media all {
            .ExternalClass {
                width: 100%;
            }

            .ExternalClass,
            .ExternalClass p,
            .ExternalClass span,
            .ExternalClass font,
            .ExternalClass td,
            .ExternalClass div {
                line-height: 100%;
            }

            .apple-link a {
                color: inherit !important;
                font-family: inherit !important;
                font-size: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important;
                text-decoration: none !important;
            }

        }
        table .invoice-table {
            padding: 20px;
        }

        table .invoice-table tr th {
            font-family: 'Inter', sans-serif;
            font-style: normal;
            font-weight: 600;
            height: 50px;
        }
        table .invoice-table tr td {
            font-family: 'Inter', sans-serif;
            font-style: normal;
            font-weight: 500;
            height: 50px;
            vertical-align: top;
            color: #171717;
        }
    </style>
</head>

<body class
    style="background-color: #eaebed; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body"
        style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; background-color: #eaebed; width: 100%;"
        width="100%" bgcolor="#eaebed">
        <tr>
            <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>
            <td class="container"
                style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; max-width: 580px; padding: 10px; width: 580px; Margin: 0 auto;"
                width="580" valign="top">

                <div class="content"
                    style="box-sizing: border-box; display: block; Margin: 0 auto; max-width: 580px; padding: 10px;">

                    <!-- START CENTERED WHITE CONTAINER -->
                    <span class="preheader"
                        style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">This
                        is preheader text. Some clients will show this text as a preview.</span>
                    <table role="presentation" class="main"
                        style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; background: #ffffff; border-radius: 3px; width: 100%;"
                        width="100%">

                        <!-- START MAIN CONTENT AREA -->
                        test
                        <tr>
                            <td class="wrapper"
                                style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;"
                                valign="top">
                                <table role="presentation" border="0" cellpadding="0" cellspacing="0"
                                    style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; width: 100%;"
                                    width="100%">
                                    <tr>

                                        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;"
                                            valign="top">
                                            <div class="align-center" width="100%" style="text-align: center;">

                                            </div>
                                            <p
                                                style="margin: 0; margin-bottom: 15px; width: 536px; height: 50px; font-family: 'Inter', sans-serif; font-style: normal; font-weight: 400; font-size: 14px; line-height: 150%; color: #212121;">
                                                Kepada {{erlangga}},
                                            </p>
                                            <p
                                                style="margin: 0; margin-bottom: 15px; width: 536px; font-family: 'Inter', sans-serif; font-style: normal; font-weight: 700; font-size: 14px; line-height: 150%; color: #212121;">
                                                Terima kasih telah memesan tiket.
                                            </p>
                                            <p
                                                style="margin: 0; margin-bottom: 15px; width: 536px; height: 50px; font-family: 'Inter', sans-serif; font-style: normal; font-weight: 400; font-size: 14px; line-height: 150%; color: #212121;">
                                                Kami senang Anda akan berkunjung ke {{Taman Hutan Raya Ir. H. Djuanda}}.
                                                Berikut detail informasi pemesanan:
                                            </p>

                                            <table class="invoice-table" role="presentation" border="0" cellpadding="0"
                                                cellspacing="0"
                                                style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; box-sizing: border-box; min-width: 100%; width: 100%; background-color: #FAFAFA; border-radius: 6px;"
                                                width="100%">
                                                <tbody>
                                                    <tr>
                                                        <th style="width: 267px; display: flex; align-items: start;">
                                                            Detail Invoice</th>
                                                        <th style="width: 243px"></th>
                                                        <th style="width: 20px"></th>
                                                    </tr>
                                                    <tr>
                                                        <td style="width: 267px; display: flex; align-items: start; color: #404040;">No.
                                                            Invoice</td>
                                                        <td style="width: 243px; color: #108F5A; font-weight:600;">SPW-0001234</td>
                                                        <td style="width: 20px"></td>
                                                    </tr>
                                                    <tr>
                                                        <td style="width: 267px; display: flex; align-items: start; color: #404040;">Nama Pengunjung</td>
                                                        <td style="width: 243px;">Erlangga</td>
                                                        <td style="width: 20px"></td>
                                                    </tr>
                                                    <tr>
                                                        <td style="width: 267px; display: flex; align-items: start; color: #404040;">Tanggal Kunjungan</td>
                                                        <td style="width: 243px;">12 Januari 2024</td>
                                                        <td style="width: 20px"></td>
                                                    </tr>
                                                    <tr>
                                                        <td style="width: 267px; display: flex; align-items: start; color: #404040;">Waktu Kunjungan</td>
                                                        <td style="width: 243px;">Sesi 1 (09:30 - 11:00)</td>
                                                        <td style="width: 20px"></td>
                                                    </tr>
                                                    <tr>
                                                        <td style="width: 267px; display: flex; align-items: start; color: #404040;">Jumlah Tiket</td>
                                                        <td style="width: 243px;">Lokal Anak-anak</td>
                                                        <td style="width: 20px">1</td>
                                                    </tr>
                                                    <tr>
                                                        <td style="width: 267px;"></td>
                                                        <td style="width: 243px;">Lokal Dewasa</td>
                                                        <td style="width: 20px">5</td>
                                                    </tr>
                                                    <tr>
                                                        <td style="width: 267px;"></td>
                                                        <td style="width: 243px;">Mancanegara Anak-anak</td>
                                                        <td style="width: 20px">1</td>
                                                    </tr>
                                                    <tr>
                                                        <td style="width: 267px;"></td>
                                                        <td style="width: 243px;">Mancanegara</td>
                                                        <td style="width: 20px">5</td>
                                                    </tr>
                                                    <tr>
                                                        <td style="width: 267px;"></td>
                                                        <td style="width: 243px;">Total Tiket</td>
                                                        <td style="width: 20px">12</td>
                                                    </tr>
                                                    <tr>
                                                        <td style="width: 267px; display: flex; align-items: start; color: #404040;">Harga Total</td>
                                                        <td style="width: 243px;">Rp. 120.000</td>
                                                        <td style="width: 20px"></td>
                                                    </tr>
                                                    <tr>
                                                        <td style="width: 267px; display: flex; align-items: start; color: #404040;">Pilihan Pembayaran</td>
                                                        <td style="width: 243px;">QRIS BJB</td>
                                                        <td style="width: 20px"></td>
                                                    </tr>


                                        </td>
                                    </tr>
                                    </tbody>
                                </table>


                                <table role="presentation" border="0" cellpadding="0" cellspacing="0"
                                    class="btn btn-primary"
                                    style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; box-sizing: border-box; min-width: 100%; width: 100%;"
                                    width="100%">
                                    <tbody>
                                        <tr>
                                            <td align="center"
                                                style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 15px;"
                                                valign="top">
                                                <table
                                                    style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: auto; width: auto; margin-top: 200px;"
                                                    role="presentation" border="0" cellpadding="0" cellspacing="0">
                                                    <tbody>
                                                        <tr>
                                                            <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; border-radius: 5px; text-align: center; "
                                                                valign="top" align="center"> <button style="
                    width: 536px;
                    height: 38px;
                    color: white;
                    font-family: 'Lato', sans-serif;
                    font-style: normal;
                    font-weight: 700;
                    background: #069550;
                    border-radius: 8px;
            ">
                                                                   Lokasi Tujuan
                                                                </button> </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p
                                    style="margin: 0; margin-bottom: 15px; width: 536px; height: 19px; font-family: 'Inter', sans-serif; font-style: normal; font-weight: 700; font-size: 14px; line-height: 19px; color: #212121;">
                                    Jabar Digital Service
                                </p>
                                <p
                                    style="font-weight: normal; margin: 0; margin-bottom: 15px; font-size: 12px; font-family: 'Inter', sans-serif;">
                                    Alamat: Jabar Command Center (Gedung Setda B Lt. II)
                                    <br>
                                    Jalan Diponegoro Nomor 22 Bandung Jawa Barat 40115
                                </p>
                            </td>
                        </tr>
                    </table>
            </td>
        </tr>

        <!-- END MAIN CONTENT AREA -->
    </table>

    <!-- START FOOTER -->

    <!-- END FOOTER -->

    <!-- END CENTERED WHITE CONTAINER -->
    </div>
    </td>
    <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>
    </tr>
    </table>
</body>

</html>
`
}