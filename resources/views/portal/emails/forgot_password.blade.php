<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ trans('passwords.mail_forgot_subject') }}</title>
</head>

<body>
    OPNiDをご利用いただき、ありがとうございます。<br/><br/>下記URLよりパスワードの再設定を行ってください。
    <br/><a href="{{ $url }}">{{ $url }}</a><br/><br/><br/>本URLの有効期限は発行より{{ config('auth.email_auth_timeout')/60 }}分となっております。
    <br>期限が切れてしまった際には、再度｢アカウント > パスワード変更｣よりパスワード変更を行なってください。<br/><br/>
    ※本メールにお心当たりの無い方は、大変お手数ですが本メールを破棄頂きますようお願い申し上げます。<br/><br/>
    本メールアドレスは送信になりますので、本メールにご返信頂いてもお答えできませんのでご了承下さい。<br/><br/>
    <br/>OPNiD<br>
    <a href="http://{{ config('app.subdomain_admin') }}">
        http://{{ config('app.subdomain_portal') }}
    </a>
</body>
</html>