var cookieConsent = false
function writeCookie(cookie) {
    if (cookieConsent) {
        const date = new Date();
        date.setTime(date.getTime() + (20 * 365 * 24 * 60 * 60 * 1000));
        document.cookie = "user_cookie_preference=yes; user_date=" + cookie.date + "; dark_mode=" + cookieStore.dark_mode + "; expires=" + date.toUTCString() + "; path=/; Secure; SameSite=Lax";
        return true;
    }
    return false;
}
function readCookies() {
    var cookies = document.cookie.split("; ");
    var cookiePrefs = {}
    cookies.forEach(c => {var cookie = c.split("=");cookiePrefs[cookie[0]] = cookie[1]})
    return cookiePrefs
}
function acceptCookies() {
    cookieConsent = true;
    document.getElementById("cookie-banner").hidden = true;
}
function denyCookies() {
    document.getElementById("cookie-banner").hidden = true;
}