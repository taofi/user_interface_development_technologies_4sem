//по умолчанию первый элемент 0, остальные +1
enum Membership {
    Simple,
    Standard,
    Premium
}

const membership = Membership.Standard
const membershipReverse = Membership[2]//оброщение к индексу и получение строки

console.log(membership)
console.log(membershipReverse)

//задание строковых значений
enum SocialMedia {
    VK = 'VK',
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM'
}

const social = SocialMedia.INSTAGRAM
console.log(social)
console.log(SocialMedia['VK']);
