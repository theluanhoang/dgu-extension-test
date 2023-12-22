import { clientUrl } from "@/configs/config.app";
import { ROUTES_CLIENT } from "@/utils";
export const templateSuccessCreateAdmin = (email: string) => {
    return `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"> <head> <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="format-detection" content="telephone=no" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <title>Chúc mừng bạn đã trở thành quản trị viên</title> <style type="text/css" emogrify="no"> #outlook a { padding: 0; } .ExternalClass { width: 100%; } .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div { line-height: 100%; } table td { border-collapse: collapse; mso-line-height-rule: exactly; } .editable.image { font-size: 0 !important; line-height: 0 !important; } .nl2go_preheader { display: none !important; mso-hide: all !important; mso-line-height-rule: exactly; visibility: hidden !important; line-height: 0px !important; font-size: 0px !important; } body { width: 100% !important; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; margin: 0; padding: 0; } img { outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; } a img { border: none; } table { border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; } th { font-weight: normal; text-align: left; } *[class="gmail-fix"] { display: none !important; } </style> <style type="text/css" emogrify="no"> @media (max-width: 600px) { .gmx-killpill { content: "D1"; } } </style> <style type="text/css" emogrify="no"> @media (max-width: 600px) { .gmx-killpill { content: "D1"; } .r0-o { border-style: solid !important; margin: 0 auto 0 auto !important; width: 340px !important; } .r1-i { background-color: #ffffff !important; } .r2-c { box-sizing: border-box !important; text-align: center !important; valign: top !important; width: 100% !important; } .r3-o { background-image: url("https://img.mailinblue.com/2670624/images/rnb/original/5ecfcf26572ed0b1e20af2e5.png") !important; background-size: cover !important; border-style: solid !important; margin: 0 auto 0 auto !important; width: 100% !important; } .r4-i { padding-bottom: 61px !important; padding-left: 15px !important; padding-right: 15px !important; padding-top: 50px !important; } .r5-c { box-sizing: border-box !important; display: block !important; valign: top !important; width: 100% !important; } .r6-o { border-style: solid !important; width: 100% !important; } .r7-i { padding-left: 0px !important; padding-right: 0px !important; } .r8-c { box-sizing: border-box !important; text-align: left !important; valign: top !important; width: 100% !important; } .r9-o { border-style: solid !important; margin: 0 auto 0 0 !important; width: 100% !important; } .r10-i { text-align: left !important; } .r11-c { box-sizing: border-box !important; text-align: left !important; valign: top !important; width: 230px !important; } .r12-o { border-style: solid !important; margin: 0 auto 0 0 !important; margin-top: 17px !important; width: 230px !important; } .r13-i { text-align: center !important; } .r14-r { background-color: #a48672 !important; border-radius: 30px !important; padding-bottom: 15px !important; padding-left: 5px !important; padding-right: 5px !important; padding-top: 16px !important; text-align: center !important; width: 220px !important; } .r15-i { padding-top: 25px !important; text-align: left !important; } .r16-i { padding-top: 5px !important; text-align: left !important; } .r17-o { border-style: solid !important; margin: 0 auto 0 auto !important; width: 100% !important; } .r18-i { background-color: #2d3044 !important; padding-bottom: 42px !important; padding-left: 15px !important; padding-right: 15px !important; padding-top: 37px !important; } .r19-i { padding-left: 0px !important; padding-right: 0px !important; padding-top: 30px !important; } body { -webkit-text-size-adjust: none; } .nl2go-responsive-hide { display: none; } .nl2go-body-table { min-width: unset !important; } .mobshow { height: auto !important; overflow: visible !important; max-height: unset !important; visibility: visible !important; border: none !important; } .resp-table { display: inline-table !important; } .magic-resp { display: table-cell !important; } } </style> <!--[if !mso]><!--> <style type="text/css" emogrify="no"> @import url("https://fonts.googleapis.com/css2?family=Vollkorn:wght@700&display=swap"); @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"); </style> <!--<![endif]--> <style type="text/css"> p, h1, h2, h3, h4, ol, ul { margin: 0; } a, a:link { color: #ffffff; text-decoration: none; } .nl2go-default-textstyle { color: #392f65; font-family: Roboto, Arial, Helvetica, sans-serif; font-size: 16px; line-height: 1.5; word-break: break-word; } .default-button { color: #ffffff; font-family: Roboto, Arial, Helvetica, sans-serif; font-size: 16px; font-style: normal; font-weight: normal; line-height: 1.15; text-decoration: none; word-break: break-word; } .nl2go_class_14_white_l { color: #ffffff; font-family: Roboto, Arial, Helvetica, sans-serif; font-size: 14px; font-weight: 300; word-break: break-word; } .nl2go_class_14_white_reg { color: #ffffff; font-family: Roboto, Arial, Helvetica, sans-serif; font-size: 14px; word-break: break-word; } .nl2go_class_14_white_b { color: #ffffff; font-family: Roboto, Arial, Helvetica, sans-serif; font-size: 14px; font-weight: 700; word-break: break-word; } .nl2go_class_16_white_reg_up { color: #ffffff; font-family: Roboto, Arial, Helvetica, sans-serif; font-size: 16px; text-transform: uppercase; word-break: break-word; } .nl2go_class_16_blue_reg { color: #392f65; font-family: Roboto, Arial, Helvetica, sans-serif; font-size: 16px; word-break: break-word; } .nl2go_class_24_blue_b { color: #392f65; font-family: Roboto, Arial, Helvetica, sans-serif; font-size: 24px; font-weight: 700; word-break: break-word; } .nl2go_class_48_blue_vollkorn_b { color: #392f65; font-family: Vollkorn, Georgia, Times, Times New Roman, serif, Arial; font-size: 48px; word-break: break-word; } .nl2go_class_headline { color: #677876; font-family: Roboto, Arial, Helvetica, sans-serif; font-size: 26px; word-break: break-word; } .nl2go_class_impressum { color: #999999; font-family: Roboto, Arial, Helvetica, sans-serif; font-size: 12px; font-style: italic; word-break: break-word; } .default-heading1 { color: #392f65; font-family: Vollkorn, Georgia, Times, Times New Roman, serif, Arial; font-size: 48px; word-break: break-word; } .default-heading2 { color: #392f65; font-family: Roboto, Arial, Helvetica, sans-serif; font-size: 24px; word-break: break-word; } .default-heading3 { color: #392f65; font-family: Roboto, Arial, Helvetica, sans-serif; font-size: 20px; word-break: break-word; } .default-heading4 { color: #392f65; font-family: Roboto, Arial, Helvetica, sans-serif; font-size: 18px; word-break: break-word; } a[x-apple-data-detectors] { color: inherit !important; text-decoration: inherit !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important; } .no-show-for-you { border: none; display: none; float: none; font-size: 0; height: 0; line-height: 0; max-height: 0; mso-hide: all; overflow: hidden; table-layout: fixed; visibility: hidden; width: 0; } </style> <!--[if mso ]><xml> <o:OfficeDocumentSettings> <o:AllowPNG /> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml><! [endif]--> <style type="text/css"> a:link { color: #fff; text-decoration: none; } </style> </head> <body bgcolor="#ffffff" text="#392F65" link="#ffffff" yahoo="fix" style="background-color: #ffffff"> <table cellspacing="0" cellpadding="0" border="0" role="presentation" class="nl2go-body-table" width="100%" style="background-color: #ffffff; width: 100%" > <tr> <td> <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="600" align="center" class="r0-o" style="table-layout: fixed; width: 600px" > <tr> <td valign="top" class="r1-i" style="background-color: #ffffff"> <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" align="center" class="r3-o" style=" background-color: #f1ede4; background-image: url(&quot;https://img.mailinblue.com/2670624/images/rnb/original/5ecfcf26572ed0b1e20af2e5.png&quot;); font-size: 0; table-layout: fixed; width: 100%; " > <tr> <td class="r4-i" style=" padding-bottom: 61px; padding-left: 59px; padding-right: 240px; padding-top: 50px; " > <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation" > <tr> <th width="100%" valign="top" class="r5-c" style="font-weight: normal" > <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" class="r6-o" style="table-layout: fixed; width: 100%" > <tr> <td valign="top" class="r7-i"> <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation" > <tr> <td class="r8-c" align="left"> <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" class="r9-o" style=" table-layout: fixed; width: 100%; " > <tr> <td align="left" valign="top" class="r10-i nl2go-default-textstyle" style=" color: #392f65; font-family: Roboto, Arial, Helvetica, sans-serif; font-size: 16px; word-break: break-word; line-height: 1.1; text-align: left; " > <div> <h1 class="default-heading1" style=" margin: 0; color: #392f65; font-family: Vollkorn, Georgia, Times, Times New Roman, serif, Arial; font-size: 48px; word-break: break-word; " > <span style=" font-size: 32px; " >Chúc mừng đã đăng kí thành công tài khoản quản trị viên</span > </h1> </div> </td> </tr> </table> </td> </tr> <tr> <td class="r11-c" align="left"> <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="273" class="r12-o" style=" table-layout: fixed; width: 273px; " > <tr class="nl2go-responsive-hide"> <td height="17" style=" font-size: 17px; line-height: 17px; " > ­ </td> </tr> <tr> <td height="18" align="center" valign="top" class="r13-i nl2go-default-textstyle" style=" color: #392f65; font-family: Roboto, Arial, Helvetica, sans-serif; font-size: 16px; line-height: 1.5; word-break: break-word; " > <!--[if mso]> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="http://" style=" v-text-anchor: middle; height: 48px; width: 272px; " arcsize="50%" fillcolor="#a48672" strokecolor="#a48672" strokeweight="1px" data-btn="1" > <w:anchorlock> </w:anchorlock> <v:textbox inset="0,0,0,0" > <div style=" display: none; " > <center class="default-button" > <span >Quản lý tài khoản tại đây</span > </center> </div> </v:textbox> </v:roundrect> <![endif]--> <!--[if !mso]><!-- --> <a href="${clientUrl}${ROUTES_CLIENT.dashboard}" class="r14-r default-button" target="_blank" data-btn="1" style=" font-style: normal; font-weight: normal; line-height: 1.15; text-decoration: none; word-break: break-word; border-style: solid; word-wrap: break-word; display: block; -webkit-text-size-adjust: none; background-color: #a48672; border-bottom-width: 0px; border-color: #a48672; border-left-width: 0px; border-radius: 30px; border-right-width: 0px; border-top-width: 0px; color: #ffffff; font-family: Roboto, Arial, Helvetica, sans-serif; font-size: 16px; height: 18px; mso-hide: all; padding-bottom: 15px; padding-left: 5px; padding-right: 5px; padding-top: 16px; width: 263px; " > <span >Quản lý tài khoản tại đây</span ></a > <!--<![endif]--> </td> </tr> </table> </td> </tr> <tr> <td class="r8-c" align="left"> <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" class="r9-o" style=" table-layout: fixed; width: 100%; " > <tr> <td align="left" valign="top" class="r15-i nl2go-default-textstyle" style=" color: #392f65; font-family: Roboto, Arial, Helvetica, sans-serif; font-size: 16px; line-height: 1.5; word-break: break-word; padding-top: 25px; text-align: left; " > <div> <h2 class="default-heading2" style=" margin: 0; color: #392f65; font-family: Roboto, Arial, Helvetica, sans-serif; font-size: 24px; word-break: break-word; " > Chào ${email} </h2> </div> </td> </tr> </table> </td> </tr> <tr> <td class="r8-c" align="left"> <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" class="r9-o" style=" table-layout: fixed; width: 100%; " > <tr> <td align="left" valign="top" class="r16-i nl2go-default-textstyle" style=" color: #392f65; font-family: Roboto, Arial, Helvetica, sans-serif; font-size: 16px; line-height: 1.5; word-break: break-word; padding-top: 5px; text-align: left; " > <div> <p style="margin: 0"> Cảm ơn bạn đã kí tài khoản , vui lòng tuân theo các quy tắc của DGU EXTENSION. </p> </div> </td> </tr> </table> </td> </tr> </table> </td> </tr> </table> </th> </tr> </table> </td> </tr> </table> <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" align="center" class="r17-o" style="table-layout: fixed; width: 100%" > <tr> <td class="r18-i" style=" background-color: #2d3044; padding-bottom: 42px; padding-left: 59px; padding-right: 58px; padding-top: 37px; " > <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation" > <tr> <th width="66.67%" valign="top" class="r5-c" style="font-weight: normal" > <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" class="r6-o" style="table-layout: fixed; width: 100%" > <tr> <td valign="top" class="r7-i"> <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation" > <tr> <td class="r8-c" align="left"> <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" class="r9-o" style=" table-layout: fixed; width: 100%; " > <tr> <td align="left" valign="top" class="r10-i nl2go-default-textstyle" style=" color: #392f65; font-family: Roboto, Arial, Helvetica, sans-serif; font-size: 16px; line-height: 1.5; word-break: break-word; text-align: left; " > <div> <div class="nl2go_class_14_white_b" style=" color: #fff; font-family: Roboto, Arial, Helvetica, sans-serif; font-size: 14px; font-weight: 700; word-break: break-word; " > DGU EXTENSION </div> </div> </td> </tr> </table> </td> </tr> <tr> <td class="r8-c" align="left"> <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" class="r9-o" style=" table-layout: fixed; width: 100%; " > <tr> <td align="left" valign="top" class="r10-i nl2go-default-textstyle" style=" color: #392f65; font-family: Roboto, Arial, Helvetica, sans-serif; font-size: 16px; line-height: 1.5; word-break: break-word; text-align: left; " > <div> <div class="nl2go_class_14_white_l" style=" color: #fff; font-family: Roboto, Arial, Helvetica, sans-serif; font-size: 14px; font-weight: 300; word-break: break-word; " > <span style=" display: inline; " >Địa chỉ: 596/15 Lê Văn Hiến, Hoà Hải, Ngũ Hành Sơn, Đà Nẵng </span ><br /><span style=" display: inline; " >website: </span ><a href="https://dgu.io.vn/" style=" color: #fff; text-decoration: underline; " >https://dgu.io.vn</a > </div> </div> </td> </tr> </table> </td> </tr> </table> </td> </tr> </table> </th> <th width="33.33%" valign="top" class="r5-c" style="font-weight: normal" > <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" class="r6-o" style="table-layout: fixed; width: 100%" > <tr> <td valign="top" class="r19-i"> <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation" ></table> </td> </tr> </table> </th> </tr> </table> </td> </tr> </table> </td> </tr> </table> </td> </tr> </table> </body></html>
    `;
};