var app = angular.module('app');

app.constant('menuitems', [
    {index:0, title:"Home", url:'home'},
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

app.constant('filters', {
    ram: ['2GB', '4GB', '8GB', '12GB', '16GB', '32GB'],
    brands: ['HP', 'ASUS', 'ACER', 'LENOVO']
});
app.constant('products', [
    {
        type: 'notebook',
        name:'ASUS E402SA-WX016T Celeron N3050/2GB/32GB/14"/Win10',
        brand:'ASUS',
        screen:'14"',
        ram:'2GB',
        available:true,
        img:'asus1.jpg',
        price: '$279.00',
        categories:['notebooks']
    },
    {
        type: 'notebook',
        name:'HP G5 250(W5T31PT) Celeron N3060/4GB/500GB/15.6"/DVDRW/Win10',
        brand:'HP',
        screen:'15.6"',
        ram:'4GB',
        available:false,
        img:'hp1.jpg',
        price: '$345.00',
        categories:['notebooks']
    },
    {
        type: 'notebook',
        name:'ACER Aspire R3-131T-C62X(NX.G10SA.002) 4G/32G/11.6"Touch/Win10',
        brand:'ACER',
        screen:'11.6"',
        ram:'4GB',
        available:true,
        img:'acer1.jpg',
        price: '$399.00',
        categories:['notebooks']
    },
    {
        type: 'notebook',
        name:'ASUS A540SA-XX578T Celeron N3050/4GB/500GB/15.6"/DVD/Win10',
        brand:'ASUS',
        screen:'15.6"',
        ram:'4GB',
        available:true,
        img:'asus2.jpg',
        price: '$449.00',
        categories:['notebooks']
    },
    {
        type: 'notebook',
        name:'HP G5 250(W5T32PT) i3-5005U/4GB/500GB/15.6"/DVDRW/Win10 64bit',
        brand:'HP',
        screen:'15.6"',
        ram:'4GB',
        available:true,
        img:'hp2.jpg',
        price: '$479.00',
        categories:['notebooks']
    },
    {
        type: 'notebook',
        name:'Lenovo B5080(80EW03N7AU) i3-5005U/4GB/500GB/15.6"/DVDRW',
        brand:'Lenovo',
        screen:'15.6"',
        ram:'4GB',
        available:true,
        img:'lenovo1.jpg',
        price: '$499.00',
        categories:['notebooks']
    },
    {
        type: 'notebook',
        name:'ACER Travelmate TMP246-M-54JC i5-4210U/8GB/500G/14"/DVD/Win7',
        brand:'ACER',
        screen:'14"',
        ram:'8GB',
        available:false,
        img:'acer2.jpg',
        price: '$499.00',
        categories:['notebooks']
    },
    {
        type: 'notebook',
        name:'Acer V3-372-56V8(NX.G7ASA.006) Ultrabook i5-6200U/4G/128GB/13.3"/Win10 Home 64bit',
        brand:'ACER',
        screen:'13.3"',
        ram:'4GB',
        available:true,
        img:'acer3.jpg',
        price: '$689.00',
        categories:['notebooks']
    },
    {
        type: 'notebook',
        name:'HP Probook G3 450 i5-6200U/4GB/500GB/15.6"/DVDRW/Win10 64bit',
        brand:'HP',
        screen:'15.6"',
        ram:'4GB',
        available:true,
        img:'hp3.jpg',
        price: '$699.00',
        categories:['notebooks']
    },
    {
        type: 'notebook',
        name:'ASUS A540LA-XX521R i5-5200U/4GB/1TB/15.6"/Win10 Pro',
        brand:'ASUS',
        screen:'15.6"',
        ram:'4GB',
        available:true,
        img:'asus3.jpg',
        price: '$699.00',
        categories:['notebooks']
    },
    {
        type: 'notebook',
        name:'ASUS P2520LA-XO0402W i5-5200U/4GB/1TB/15.6"/DVDRW/Win10',
        brand:'ASUS',
        screen:'15.6"',
        ram:'4GB',
        available:true,
        img:'asus4.jpg',
        price: '$739.00',
        categories:['notebooks']
    },
    {
        type: 'notebook',
        name:'HP Probook 430(X6W35PA) i3-6100U/4GB/500GB/13.3"/Win7PWin10P 64 bit',
        brand:'HP',
        screen:'13.3"',
        ram:'4GB',
        available:true,
        img:'hp4.jpg',
        price: '$799.00',
        categories:['notebooks']
    },
    {
        type: 'notebook',
        name:'ACER Aspire E5-575-76C9 Black i7-6500U/8GB/1TB/15.6"/DVD/Win10 64bit',
        brand:'ACER',
        screen:'15.6"',
        ram:'8GB',
        available:true,
        img:'acer4.jpg',
        price: '$799.00',
        categories:['notebooks']
    },
    {
        type: 'notebook',
        name:'HP Pavilion15-AN007TX i5-6200U/8GB/1TB/15.6"FHD/DVDR',
        brand:'HP',
        screen:'15.6"',
        ram:'8GB',
        available:false,
        img:'hp5.jpg',
        price: '$949.00',
        categories:['notebooks']
    },
    {
        type: 'notebook',
        name:'HP ENVY14-J110TX Intel I5-6200U/4G/1TB/14"/Win10 64bit/2G GT940M',
        brand:'HP',
        screen:'15.6"',
        ram:'8GB',
        available:true,
        img:'hp6.jpg',
        price: '$989.00',
        categories:['notebooks']
    }


]);