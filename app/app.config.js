var app = angular.module('app');

app.constant('menuitems', [
    {index:1, title:"Promotion Products", url:'promotion-products'},
    {index:2, title:"New Products", url:'new-products'},
    {index:3, title:"PC Components", url:'pc-components'},
    {index:4, title:"Peripherals", url:'peripherals'},
    {index:5, title:"Notebooks", url:'notebooks'},
    {index:6, title:"Notebook Accessories", url:'notebook-accessories'},
    {index:7, title:"PC Accessories", url:'pc-accessories'},
    {index:8, title:"Mobile Phone", url:'mobile-phone'},
    {index:9, title:"Stock Clearance", url:'stock-clearance'},
    {index:10, title:"CableList Store", url:'cablelist-store'},
    {index:11, title:"Logitech Store", url:'logitech-store'},
    {index:12, title:"Microsoft Store", url:'microsoft-store'},
    {index:13, title:"Samsung Store", url:'samsung-store'},
    {index:14, title:"Corsair Store", url:'corsair-store'}

]);

app.constant('products', [
    {
        name:'ASUS E402SA-WX016T Celeron N3050/2GB/32GB/14"/Win10',
        brand:'ASUS',
        screen:'14"',
        ram:'2GB RAM',
        available:true,
        img:'asus1.jpg',
        categories:['notebooks']
    },
    {
        name:'HP G5 250(W5T31PT) Celeron N3060/4GB/500GB/15.6"/DVDRW/Win10 64bit',
        brand:'HP',
        screen:'15.6"',
        ram:'4GB RAM',
        available:true,
        img:'hp1.jpg',
        categories:['notebooks']
    },
    {
        name:'ACER Aspire R3-131T-C62X(NX.G10SA.002) Convertible Celeron N3050/4G/32G/11.6"Touch/Win10',
        brand:'ACER',
        screen:'11.6"',
        ram:'4GB RAM',
        available:true,
        img:'acer1.jpg',
        categories:['notebooks']
    },
    {
        name:'ASUS A540SA-XX578T Celeron N3050/4GB/500GB/15.6"/DVD/Win10',
        brand:'ASUS',
        screen:'15.6"',
        ram:'4GB RAM',
        available:true,
        img:'asus2.jpg',
        categories:['notebooks']
    },
    {
        name:'',
        brand:'',
        screen:'',
        ram:'',
        available:true,
        img:'',
        categories:['notebooks']
    },{
        name:'',
        brand:'',
        screen:'',
        ram:'',
        available:true,
        img:'',
        categories:['notebooks']
    },
    {
        name:'',
        brand:'',
        screen:'',
        ram:'',
        available:true,
        img:'',
        categories:['notebooks']
    },
    {
        name:'',
        brand:'',
        screen:'',
        ram:'',
        available:true,
        img:'',
        categories:['notebooks']
    },
    {
        name:'',
        brand:'',
        screen:'',
        ram:'',
        available:true,
        img:'',
        categories:['notebooks']
    }
]);