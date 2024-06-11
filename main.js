let global = new Vue ({
    el: '#global',
    data: {
        products: [
            {
                img: 'sepatu merah.jpg',
                link: '#',
                nama: 'Sepatu Merah',
                hargaDiskon: 300000,
                harga: 150000,
            },
            {
                img: 'sepatu kuning.jpeg',
                link: '#',
                nama: 'Sepatu Kuning Jordan',
                hargaDiskon: 400000,
                harga: 100000,
            },
            {
                img: 'sneakers.jpeg',
                link: '#',
                nama: 'Sepatu Sneakers',
                hargaDiskon: 600000,
                harga: 350000,
            },
            {
                img: 'biasa.jpeg',
                link: '#',
                nama: 'Sepatu Biasa',
                hargaDiskon: 100000,
                harga: 80000,
            },
            {
                img: 'ahha.jpeg',
                link: '#',
                nama: 'Sepatu AHHA',
                hargaDiskon: 1000000,
                harga: 350000,
            },
            {
                img: 'jordan merah.jpeg',
                link: '#',
                nama: 'Sepatu Jordan Merah',
                hargaDiskon: 500000,
                harga: 300000,
            },
        ],
        modalDisplay: 'none',
        imgModal: '',
        namaModal: '',
        hargaDiskonModal: 0,
        hargaModal: 0,
        qty: 0,
        packaging: '',
        cart: [],
    },
    methods: {
        close(){
            this.modalDisplay = 'none'
            this.namaModal = ''
            this.hargaModal = ''
            this.qty = 0
            this.packaging = ''
        },
        detail(value){
            this.modalDisplay = 'block'
            if (value === "Sepatu Merah") {
                this.imgModal = 'sepatu merah.jpg'
                this.namaModal = 'Sepatu Merah'
                this.hargaDiskonModal = 300000
                this.hargaModal = 150000
            } else if (value === "Sepatu Kuning Jordan") {
                this.imgModal = 'sepatu kuning.jpeg'
                this.namaModal = 'Sepatu Kuning'
                this.hargaDiskonModal = 400000
                this.hargaModal = 100000
            } else if (value === "Sepatu Sneakers") {
                this.imgModal = 'sneakers.jpeg'
                this.namaModal = 'Sepatu Sneakers'
                this.hargaDiskonModal = 600000
                this.hargaModal = 350000
            } else if (value === "Sepatu Biasa") {
                this.imgModal = 'biasa.jpeg'
                this.namaModal = 'Sepatu Biasa'
                this.hargaDiskonModal = 100000
                this.hargaModal = 80000
            } else if (value === "Sepatu AHHA") {
                this.imgModal = 'ahha.jpeg'
                this.namaModal = 'Sepatu AHHA'
                this.hargaDiskonModal = 1000000
                this.hargaModal = 300000
            } else if (value === "Sepatu Jordan Merah") {
                this.imgModal = 'jordan merah.jpeg'
                this.namaModal = 'Sepatu Jordan Merah'
                this.hargaDiskonModal = 500000
                this.hargaModal = 300000
            }
        },
        menu(value){
            let cc = document.getElementById("circle")
            if (value === 'home') {
                cc.style.transform = 'translateX(-162px)'
                cc.style.width = '75px'
            } else if (value === 'collection') {
                cc.style.transform = 'translateX(-75px)'
                cc.style.width = '100px'
            } else if (value === 'brands') {
                cc.style.transform = 'translateX(20px)'
                cc.style.width = '80px'
            } else if (value === 'sale') {
                cc.style.transform = 'translateX(93px)'
                cc.style.width = '60px'
            } else {
                cc.style.transform = 'translateX(163px)'
                cc.style.width = '75px'
            }
        },
        minusQty(){
            this.qty -= 1
            if (this.qty < 0) {
                alert("Tidak Boleh Kurang Dari Nol")
                this.qty += 1
            }
        },
        plusQty(){
            this.qty += 1
        },
        packagingFunction(value){
            if (value === "normal") {
                this.packaging = "Packaging Normal"
            } else if (value === "buble-wrap") {
                this.packaging = "Packaging Buble Wrap"
            } else {
                this.packaging = "Packaging Kayu Kuat!"
            }
            console.info(this.packaging)
        },
        addToCartFunction(){
            this.cart.push({
                1: this.namaModal,
                2: this.hargaModal,
                3: this.qty,
                4: this.packaging,
            })
            this.qty = 0
            this.packaging = ''
            console.info(this.cart)
        }
    },
})