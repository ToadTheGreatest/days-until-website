var cookieConsent = false
function writeCookie(cookie) {
    if (cookieConsent) {
        const date = new Date();
        date.setTime(date.getTime() + (20 * 365 * 24 * 60 * 60 * 1000));
        end = date.toUTCString() + "expires=" + expires + "; path=/; Secure; SameSite=Lax";
        Object.keys(cookie).forEach(k => {
            const value = cookie[k];
            document.cookie = encodeURIComponent(k) + "=" + encodeURIComponent(value) + end;
        });
        return true;
    }
    return false;
}
function readCookies() {
    var cookies = document.cookie.split("; ");
    console.log(cookies)
    var cookiePrefs = {}
    cookies.forEach(c => {var cookie = c.split("=");var key = decodeURIComponent(cookie.shift());var val = decodeURIComponent(cookie.join("="));cookiePrefs[cookie[0]] = decodeURIComponent(cookie[1])})
    return cookiePrefs
}
function acceptCookies() {
    cookieConsent = true;writeCookie({"cookie_consent": true})
    document.getElementById("cookie-banner").classList.add("hidden");
}
function denyCookies() {
    document.getElementById("cookie-banner").classList.add("hidden");
}
window.addEventListener("DOMContentLoaded", () => {
    const prefs = readCookies();
    
    if (prefs.cookie_consent === "accepted") {
        cookieConsent = true;
        document.getElementById("cookie-banner").classList.add("hidden");
    } else if (prefs.cookie_consent === "declined") {
        cookieConsent = false;
        document.getElementById("cookie-banner").classList.add("hidden");
    }
});