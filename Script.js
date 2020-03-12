var signs = ["Aquarius ","Pisces ","Aries ","Taurus ","Gemini ","Cancer ",
    "Leo ","Virgo ","Libra ","Scorpio ","Sagittarius ","Capricorn ","That's not a real date!"];
var message = [
    "This week brings luck and surprises alike to your house of money and values. The Universe expands your opportunities to earn more money (and even your ideas for doing so), while bringing sudden flashes of insight and genius. You may be struck by how the people you know have been incredibly helpful, even in the tiniest ways. You'll find that these people are willing to help you again as well.",
    "It's a strange week your house of employment. Part of you wants to move ahead while part of you wants to hang back, so you may find that it's hard to make progress on your various work-related issues. There may be some tension between your desire to advance your career goals and the reality of how you're currently projecting yourself into the world. It's time to step up your game.",
    "This week brings a supportive Universe. Your mind is on putting a savings and investment plan into place, especially for your family. You want to become more responsible in this area and curb impulse spending. Think about how your needs are served by working for a large institution. Maybe it's time to think about starting your own business?",
    "This week is about the aspects affecting your house of debt and other people's money. Your career is affecting this house as well. However, you may be tested in the area of your friends or other groups. They're simply unstable now and may be great one day but completely unsupportive the next. Go it alone for now until you can find folks you can trust.",
    "All good things come to those who wait, but you don't have to wait long for the good stuff. Aspects affect your house of past lives, karma, and institutions, so you're receiving all kinds of valuable information from your dreams and psychic flashes. Make sure to pay attention. You may second-guess yourself too much. Starting this week, trust yourself to achieve all you want.",
    "You still have restrictive aspects slowing down your house of money, which may be frustrating at times. But you're also being given some new marching orders. Most affected is your day job, which is undergoing a huge change. You may even change careers or the way you bring in cash on a regular basis. Watch your health, which could become run down as a result of stress. It's better to be safe than sorry.",
    "The Universe is making you incredibly creative now. You may be filled with ideas for how to make more money, invest it, and use it to better your life. Aspects affect your house of debt and other people's money. Be prepared for the best and the worst here, and pay off what you can.",
    "This week the Universe brings up not just a lot of communication but also a lot of busywork. Don't be surprised if your week is taken up with filling out forms, filing, and the like. Since it also affects your house of institutions, you're solidifying a long-held dream, even if it isn't easy in coming. You'll grow to like and even appreciate the parts that seem dull, repetitive, tedious, or just plain annoying.",
    "You have a lot of very supportive energy to build from this week. If you've been considering starting your own business, this is a wonderful time to bring your ideas to life. The emphasis is on structure, so make sure yours is strong. If you aren't sure what the first steps should be, consult the abundant information available for small business. If you look to your closest relationships, you'll see they had the answers all along.",
    "You have all kinds of beauty coming your way this week. You may be trying to decide whether to beef up your education in money matters or begin to teach others what you already know. Beware of expert syndrome where you believe you know everything there is to know. The Universe indicates that your future career success, not to mention your financial success, depends on your ability to be an authority in your field without believing there's nothing left to learn.",
    "This week the Universe asks you to look into classes, seminars, and workshops that might further your skill set, especially when it comes to making and investing money. You're faced with a time of needing to look within to discover what it is you really want to be doing for money. Be honest, and try to make that work.",
    "This week you have aspects affecting your house of relationships. Someone you haven't heard from in a while may try to contact you in a personal or professional way. You may be surprised at how far this person has risen through the ranks! Communication is crucial now, especially as it relates to your employment picture.",
    "Please try again."
];
var images = ["images/aquarius.png","image/pisces.png","image/aries.png","image/taurus.png","image/gemini.png",
    "image/cancer.png","image/leo.png","image/virgo.png","image/libra.png","image/scorpio.png",
    "image/sagittarius.png","image/capricorn.png"];


function start() {

    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var username = document.getElementById("username").value;
    var sign = determineSign(month,day);
    var bday = determineBirthday(month,day);
    var horoscope = determineHoroscope(sign);


    document.getElementById("sign").innerHTML = signs[sign];

    if(username.length >= 1) {
        document.getElementById("horoscope").innerHTML = username + ", " + message[sign];
    }else {
        document.getElementById("horoscope").innerHTML = message[sign];
    }

    document.getElementById("images").src = images[sign];

    console.log(month)
    console.log(day)
    console.log(sign)



}

function determineSign(month,day) {

    if (month == 0) {
        if (day >= 20) {
            return 0;
        }
        if (day <= 19) {
            return 11;
        }
    }
    if (month == 1) {
        if (day <= 18) {
            return 0;
        }
        if (day >= 19 && day <= 29) {
            return 1;
        }
        if (day >= 30) {
            return 12;
        }
    }
    if (month == 2) {
        if (day <= 20) {
            return 1;
        }
        if (day >= 21) {
            return 2;
        }
    }
    if (month == 3) {
        if (day <= 19) {
            return 2;
        }
        if (day >= 20 && day <= 30) {
            return 3;
        }
        if (day > 30) {
            return 12;
        }
    }
    if (month == 4) {
        if (day <= 20) {
            return 3;
        }
        if (day >= 21) {
            return 4;
        }
    }
    if (month == 5) {
        if (day <= 20) {
            return 4;
        }
        if (day >= 21 && day <= 30) {
            return 5;
        }
        if (day > 30) {
            return 12;
        }
    }
    if (month == 6) {
        if (day <= 22) {
            return 5;
        }
        if (day >= 23) {
            return 6;
        }
    }
    if (month == 7) {
        if (day <= 22) {
            return 6;
        }
        if (day >= 23) {
            return 7;
        }
    }
    if (month == 8) {
        if (day <= 22) {
            return 7;
        }
        if (day >= 23 && day <= 30) {
            return 8;
        }
        if (day > 30) {
            return 12;
        }
    }
    if (month == 9) {
        if (day <= 22) {
            return 8;
        }
        if (day >= 23) {
            return 9;
        }
    }
    if (month == 10) {
        if (day <= 21) {
            return 9;
        }
        if (day >= 22 && day <= 30) {
            return 10;
        }
        if (day > 30){
            return 12;
        }
    }
    if(month == 11){
        if(day <= 21){
            return 10;
        }
        if(day >= 22){
            return 11;
        }
    }

}

function determineHoroscope(sign){
    if(sign == "Aquarius"){
        return message[0];
    }
    if(sign == "Pisces"){
        return message[1];
    }
    if(sign == "Aries"){
        return message[2];
    }
    if(sign == "Taurus"){
        return message[3];
    }
    if(sign == "Gemini"){
        return message[4];
    }
    if(sign == "Cancer"){
        return message[5];
    }
    if(sign == "Leo"){
        return message[6];
    }
    if(sign == "Virgo"){
        return message[7];
    }
    if(sign == "Libra"){
        return message[8];
    }
    if(sign == "Scorpio"){
        return message[9];
    }
    if(sign == "Sagittarius"){
        return message[10];
    }
    if(sign == "Capricorn"){
        return message[11];
    }
    if(sign == "That's not a real date!"){
        return message[12];
    }
}

function determineImage(sign){
    if(sign == "Aquarius"){
        return images[0];
    }
    if(sign == "Pisces"){
        return images[1];
    }
    if(sign == "Aries"){
        return images[2];
    }
    if(sign == "Taurus"){
        return images[3];
    }
    if(sign == "Gemini"){
        return images[4];
    }
    if(sign == "Cancer"){
        return images[5];
    }
    if(sign == "Leo"){
        return images[6];
    }
    if(sign == "Virgo"){
        return images[7];
    }
    if(sign == "Libra"){
        return images[8];
    }
    if(sign == "Scorpio"){
        return images[9];
    }
    if(sign == "Sagittarius"){
        return images[10];
    }
    if(sign == "Capricorn"){
        return images[11];
    }
    if(sign == "That's not a real date!"){
        return images[12];
    }
}

function determineBirthday(month,day){
    var bday = "";
    var today = new Date();
    var currentMonth = today.getMonth();
    var currentDay = today.getDay();

    if(month == currentMonth && day == currentDay){
        bday =+ "Happy Birthday!"
    }
    return bday;
}