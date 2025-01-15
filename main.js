// Tavsif: Foydalanuvchi forma maydonlariga o‘z ma’lumotlarini (ism, familiya, email) kiritadi va Qo‘shish tugmasini bosganda, ushbu ma’lumotlar jadvalga qo‘shiladi.
// Qo‘shimcha talablar:
// Jadvaldagi har bir satr oxirida O‘chirish tugmasi bo‘lsin.
// O‘chirish tugmasi bosilganda, tegishli satr o‘chiriladi.
const input_1 = document.querySelector('.input_1')
const input_2 = document.querySelector('.input_2')
const input_3 = document.querySelector('.input_3')
const jadval = document.querySelector('.jadval')
const btn_1 = document.querySelector('.btn_1')
const btn_2 = document.querySelector('.btn_2')
const btn_3 = document.querySelector('.btn_3')
const btn_4 = document.querySelector('.btn_4')
const li_1 = document.querySelector('.li_1')
const li_2 = document.querySelector('.li_2')
const li_3 = document.querySelector('.li_3')
const label_1 = document.querySelector('.label_1')
const label_2 = document.querySelector('.label_2')
const label_3 = document.querySelector('.label_3')
const emailv = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(input_1, input_2, input_3) {
    if (input_1.value.length < 3) {
        input_1.focus()
        input_1.style.outlineColor = 'red'
        return false
    }

    if (input_2.value.length < 3) {
        input_2.focus()
        input_2.style.outlineColor = 'red'
        return false
    }

    const email = input_3.value.trim()
    if (!emailv.test(email)) {
        input_3.focus()
        input_3.style.outlineColor = 'red'
        return false
    }

    return true
}

btn_1 && btn_1.addEventListener('click', function () {
    const isValid = validate(input_1, input_2, input_3)
    if (!isValid) {
        return;
    }

    li_1.style.display = 'block'
    li_2.style.display = 'block'
    li_3.style.display = 'block'
    li_1.textContent = input_1.value
    li_2.textContent = input_2.value
    li_3.textContent = input_3.value
    btn_2.style.display = 'block'
    btn_3.style.display = 'block'
    btn_4.style.display = 'block'
    label_1.style.display = 'block'
    label_2.style.display = 'block'
    label_3.style.display = 'block'
    input_1.value = ''
    input_2.value = ''
    input_3.value = ''
})

btn_2 && btn_2.addEventListener('click', function () {
    li_1.textContent = ''
})

btn_3 && btn_3.addEventListener('click', function () {
    li_2.textContent = ''
})

btn_4 && btn_4.addEventListener('click', function () {
    li_3.textContent = ''
})

// Tavsif: Formada rang tanlash uchun color turi maydoni va Matn maydoni bo‘lsin.
// Talablar:
// Foydalanuvchi rangni tanlaganida, matn maydonidagi matn fonining rangi avtomatik o‘zgaradi.
// Foydalanuvchi matnni o‘zgartirsa, bu matn darhol rangli blokda aks etadi.
const btn_5 = document.querySelector('.btn_5')
const btn_6 = document.querySelector('.btn_6')
const btn_7 = document.querySelector('.btn_7')
const p_1 = document.querySelector('.p_1')

btn_5 && btn_5.addEventListener('click', function () {
    p_1.style.color = 'blue'
})

btn_6 && btn_6.addEventListener('click', function () {
    p_1.style.color = 'green'
})

btn_7 && btn_7.addEventListener('click', function () {
    p_1.style.color = 'red'
})

// Tavsif: Formada 5 ta majburiy maydon bo‘lsin.
// Talablar:
// Yuborish tugmasini bosganda, to‘ldirilmagan maydonlar qizil hoshiyaga ega bo‘lsin.
// To‘g‘ri to‘ldirilgan maydonlar yashil hoshiyaga ega bo‘lsin.
const input_4 = document.querySelector('.input_4')
const input_5 = document.querySelector('.input_5')
const input_6 = document.querySelector('.input_6')
const input_7 = document.querySelector('.input_7')
const input_8 = document.querySelector('.input_8')
const btn_8 = document.querySelector('.btn_8')

function validate_2(input_4, input_5, input_6, input_7, input_8) {
    if (input_4.value.length === 0) {
        input_4.focus()
        input_4.style.outlineColor = 'red'
        return false
    }

    if (input_5.value.length === 0) {
        input_5.focus()
        input_5.style.outlineColor = 'red'
        return false
    }

    if (input_6.value.length === 0) {
        input_6.focus()
        input_6.style.outlineColor = 'red'
        return false
    }

    if (input_7.value.length === 0) {
        input_7.focus()
        input_7.style.outlineColor = 'red'
        return false
    }

    if (input_8.value.length === 0) {
        input_8.focus()
        input_8.style.outlineColor = 'red'
        return false
    }

    return true
}

btn_8 && btn_8.addEventListener('click', function () {

    const isValid_2 = validate_2(input_4, input_5, input_6, input_7, input_8)

    if (!isValid_2) {
        return;
    }

    const user = {
        maydon_1: input_4.value,
        maydon_2: input_5.value,
        maydon_3: input_6.value,
        maydon_4: input_7.value,
        maydon_5: input_8.value,
    }
    console.log(user)
})

// Tavsif: Foydalanuvchi formadagi Qidiruv maydoniga ma’lumot kiritganda, jadvaldagi qatorlar qidiruv so‘ziga mos ravishda filtrlanadi.
// Talablar:
// Mos kelmaydigan qatorlar yashiriladi.
// Qidiruv real vaqt rejimida ishlashi kerak.
const input_9 = document.querySelector('.input_9')
const ul_1 = document.querySelectorAll('.ul_1 li')

input_9 && input_9.addEventListener('input', function () {
    ul_1.forEach(value => {
        if (value.textContent.includes(input_9.value)) {
            value.style.display = 'block'
        } else {
            value.style.display = 'none'
        }
    })
})

// Tavsif: Foydalanuvchi formadagi Element turi (masalan, <div>, <p>) va Element mazmuni maydonlariga ma’lumot kiritsa, Yaratish tugmasi bosilganda shu element sahifada paydo bo‘lsin.
// Qo‘shimcha talablar:
// Yaratilgan elementga avtomatik stil qo‘llansin (masalan, fon rangi, chekka, kenglik va h.k.).
const input_10 = document.querySelector('.input_10')
const btn_9 = document.querySelector('.btn_9')

btn_9 && btn_9.addEventListener('click', function () {
    if (input_10.value === 'div' || input_10.value === '<div>') {
        const new_1 = document.createElement('div')
        new_1.style.backgroundColor = 'red'
        new_1.style.width = '100px'
        new_1.style.height = '100px'
        new_1.style.border = '1px solid black'
        document.body.appendChild(new_1)
    }

    if (input_10.value === 'p' || input_10.value === '<p>') {
        const new_2 = document.createElement('p')
        new_2.textContent = 'salom'
        new_2.style.color = 'red'
        document.body.appendChild(new_2)
    }
})

// Tavsif: Foydalanuvchi formadagi Rasm URL maydoniga rasm linkini kiritib, Qo‘shish tugmasini bossin.
// Talablar:
// Kiritilgan rasmni dinamik slayderga qo‘shish.
// Oldingi va Keyingi tugmalari orqali slayderni boshqarish. // qanday qilib oldingi va keyingi tugmalarini ishlatishni bilmadim ?
const input_11 = document.querySelector('.input_11')
const btn_10 = document.querySelector('.btn_10')
const div_1 = document.querySelector('.div_1') // slayder
const btn_11 = document.querySelector('.btn_11') // oldingi
const btn_12 = document.querySelector('.btn_12') // keyingi
const img_1 = document.querySelector('.img_1')

btn_10 && btn_10.addEventListener('click', function () {
    const url = input_11.value.trim()
    if (url.length > 0) {
        img_1.src = url
    } else {
        input_11.focus()
        input_11.style.outlineColor = 'red'
    }

    input_11.value = ''
})

// Tavsif: Formada foydalanuvchi bajariladigan ishlarni kiritadi va Qo‘shish tugmasini bossa, ro‘yxatga yangi ish qo‘shiladi.
// Qo‘shimcha talablar:
// Har bir ishni o‘chirish uchun O‘chirish tugmasi.
// Ish bajarilganligini belgilash uchun Checkbox. // ustoz bunda ozini nechta ishini kiritadigan bolsa har biriga alohida li ochib qoshishi kerak men buni qanday qilishni bilmayman ?

// Tavsif: Formada foydalanuvchi o‘z ismi va jinsini tanlashi kerak.
// Talablar:
// Salomlashish tugmasini bossa, foydalanuvchiga Assalomu alaykum, [Ism]! yoki Salom, [Ism]! matni ko‘rsatiladi.
// Salomlashuv shakli foydalanuvchining tanlangan jinsi asosida o‘zgaradi.
const input_12 = document.querySelector('.input_13')
const select = document.getElementById('select')
const btn_13 = document.querySelector('.btn_14')
const p_2 = document.createElement('p')

btn_13 && btn_13.addEventListener('click', function () {
    const ism_1 = input_12.value.trim()

    if (ism_1.length === 0) {
        input_12.focus()
        input_12.style.outlineColor = 'red'
    }

    if (select.value === 'erkak') {
        document.body.append(p_2)
        p_2.textContent = `Assalomu Alaykum, ${ism_1}`
    }

    if (select.value === 'ayol') {
        document.body.append(p_2)
        p_2.textContent = `Salom, ${ism_1}`
    }

    input_12.value = ''
})

// Tavsif: Formada ikkita son kiritish maydoni (Son 1, Son 2) va Operatsiya (masalan, qo‘shish, ayirish) tanlash uchun select bo‘lsin.
// Talablar:
// Foydalanuvchi maydonlarni to‘ldirganda va operatsiyani tanlaganda, natija avtomatik ko‘rsin.
// Natija hisoblagichning oxirida alohida matnda ko‘rsin. // ishlatolmadim ustoz ?

// const input_14 = document.querySelector('.input_14')
// const input_15 = document.querySelector('.input_15')
// const select_2 = document.querySelector('#select_2')
// const p_3 = document.querySelector('.p_2')

// if (select_2.value === 'qoshish') {
//     input_14 && input_14.addEventListener('input', function() {
//         p_3.textContent = input_14.value += input_15.value
//     })
// }

// if (select_2.value === 'ayirish') {
//     input_15 && input_15.addEventListener('input', function() {
//         p_3.textContent = input_15.value -= input_14.value
//     })
// }

// Tavsif: Foydalanuvchi formadagi Mahsulot nomi, Narxi va Soni maydonlarini to‘ldirib, Qo‘shish tugmasini bossa, savatchaga mahsulot qo‘shiladi.
// Qo‘shimcha talablar:
// Savatchadagi mahsulotlar jadvalda ko‘rsin.
// Har bir mahsulot uchun O‘chirish va Tahrirlash tugmalari bo‘lsin.
// Savatchaning umumiy narxi jadval ostida ko‘rsin.

const input_16 = document.querySelector('.input_16')
const input_17 = document.querySelector('.input_17')
const input_18 = document.querySelector('.input_18')
const btn_15 = document.querySelector('.btn_15')
const li_4 = document.querySelector('.li_4')
const li_5 = document.querySelector('.li_5')
const li_6 = document.querySelector('.li_6')
const btn_16 = document.querySelector('.btn_16')
const btn_17 = document.querySelector('.btn_17')
const btn_18 = document.querySelector('.btn_18')
const btn_19 = document.querySelector('.btn_19')
const btn_20 = document.querySelector('.btn_20')
const btn_21 = document.querySelector('.btn_21')
const label_4 = document.querySelector('.label_4')
const label_5 = document.querySelector('.label_5')
const label_6 = document.querySelector('.label_6')

btn_15 && btn_15.addEventListener('click', function() {
    li_4.textContent = input_16.value
    li_5.textContent = input_17.value
    li_6.textContent = input_18.value
    li_4.style.display = 'block'
    li_5.style.display = 'block'
    li_6.style.display = 'block'
    btn_16.style.display = 'block'
    btn_17.style.display = 'block'
    btn_18.style.display = 'block'
    btn_19.style.display = 'block'
    btn_20.style.display = 'block'
    btn_21.style.display = 'block'
    label_4.style.display = 'block'
    label_5.style.display = 'block'
    label_6.style.display = 'block'
})

btn_16 && btn_16.addEventListener('click', function() {
    li_4.textContent = ''
})

btn_17 && btn_17.addEventListener('click', function() {
    li_4.setAttribute('contenteditable', 'true')
})

btn_18 && btn_18.addEventListener('click', function() {
    li_5.textContent = ''
})

btn_19 && btn_19.addEventListener('click', function() {
    li_5.setAttribute('contenteditable', 'true')
})

btn_20 && btn_20.addEventListener('click', function() {
    li_6.textContent = ''
})

btn_21 && btn_21.addEventListener('click', function() {
    li_6.setAttribute('contenteditable', 'true')
})