document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById('gallery');
    const images = [
        { src: './images/2024-10-01.jpg', name: '禾木村的风景，新疆，中国 (© snvv18870020330/Shutterstock)' },
        { src: './images/2024-09-30.jpg', name: '斯匹次卑尔根岛北部的海象群，斯瓦尔巴群岛，挪威 (© AWL Images/DanitaDelimont)' },
        { src: './images/2024-09-29.jpg', name: '横跨胡萨托尼克河的西康沃尔廊桥，康涅狄格州，美国 (© pabradyphoto/Getty Images)' },
        { src: './images/2024-09-28.jpg', name: '日出时的海滩，海湾岛国家海岸，佛罗里达，美国 (© Tim Fitzharris/Minden Pictures)' },
        { src: './images/2024-09-27.jpg', name: '大运河和安康圣母教堂的鸟瞰图，威尼斯，意大利 (© Bachir Moukarzel/Amazing Aerial Agency)' },
        { src: './images/2024-09-26.jpg', name: '蓝斑巨嘴鸟，洛斯戈查尔斯国家公园，哥斯达黎加 (© Oscar Dominguez/Tandem Stills + Motion)' },
        { src: './images/2024-09-25.jpg', name: '巨型红杉，红杉国家公园，加利福尼亚州，美国 (© Galyna Andrushko/Shutterstock)' },
        { src: './images/2024-09-24.jpg', name: '斯卡夫塔山的瀑布，瓦特纳冰川国家公园，冰岛 (© Nopasorn Kowathanakul/Getty Images)' },
        { src: './images/2024-09-23.jpg', name: '海獭，威廉王子湾,阿拉斯加州,美国 (© Gerald Corsi/Getty Images)' },
        { src: './images/2024-09-22.jpg', name: '巴特米尔湖，湖区国家公园，英格兰，英国 (© Alan Novelli/Alamy Stock Photo)' },
        { src: './images/2024-09-21.jpg', name: 'Oktoberfest in Munich at sunset (© AllesSuper21/iStock/Getty Images)' },
        { src: './images/2024-09-20.jpg', name: '奥克拉科克岛上的奥克拉科克灯塔，北卡罗来纳州，美国 (© Chansak Joe/Getty Images)' },
        { src: './images/2024-09-19.jpg', name: '埃尔博河上空的银河，阿尔伯塔省，加拿大 (© Alan Dyer/Getty Images)' },
        { src: './images/2024-09-18.jpg', name: '郡上八幡城，岐阜县，日本 (© ta2funk ito/500px/Getty Images)' },
        { src: './images/2024-09-17.jpg', name: '月圆之夜的豫园，上海，中国 (© zyxeos30/Gettyimages)' },
        { src: './images/2024-09-16.jpg', name: '日出时的小袋鼠，阿德莱德河，北领地，澳大利亚 (© Jeremy Woodhouse/Getty Images)' },
        { src: './images/2024-09-15.jpg', name: '阿科马尼奥海滩，卡拉布里亚，意大利 (© Alessio de Cicco/Getty Images)' },
        { src: './images/2024-09-14.jpg', name: '阿胡汤加里基的日出，拉帕·努伊国家公园，复活节岛，智利 (© Piriya Photography/Getty Images)' },
        { src: './images/2024-09-13.jpg', name: '雷耶斯角国家海岸灯塔，加利福尼亚州，美国 (© RMB Images/Photography by Robert Bowman/Getty Images)' },
        { src: './images/2024-09-12.jpg', name: '留尼汪岛附近的海豚群，印度洋，法国海外省 (© Joost van Uffelen/Shutterstock)' },
        { src: './images/2024-09-11.jpg', name: '埃尔茨城堡，德国 (© Allard Schager/Alamy)' },
        { src: './images/2024-09-10.jpg', name: '瓦斯科·达·伽马大桥，里斯本，葡萄牙 (© Achim Thomae/Getty Images)' },
        { src: './images/2024-09-09.jpg', name: '阿根廷和巴西边境的伊瓜苏瀑布 (© AirPano LLC/Amazing Aerial Agency)' },
        { src: './images/2024-09-08.jpg', name: '加泰罗尼亚北部的圣马丁杜卡尼古修道院 ，法国 (© Cyril Gosselin/Getty Images)' },
        { src: './images/2024-09-07.jpg', name: '朱红蜂鸟，圣克鲁斯，加利福尼亚州，美国 (© yhelfman/Getty Images)' },
        { src: './images/2024-09-06.jpg', name: '古老山毛榉树，格莱纳里夫森林公园，安特里姆郡，北爱尔兰 (© Dawid K Photography/Shutterstock)' },
        { src: './images/2024-09-05.jpg', name: '多伦多城市天际线,加拿大 (© Roberto Machado Noa/Getty Images)' },
        { src: './images/2024-09-04.jpg', name: '乌雕鸮，巴基斯坦 (© zahoor salmi/Getty Images)' },
        { src: './images/2024-09-03.jpg', name: '迷人的水晶湖，高山湖泊，华盛顿州，美国 (© Mitch Pittman/Tandem Stills + Motion)' },
        { src: './images/2024-09-02.jpg', name: '红绿金刚鹦鹉，南马托格罗索州，巴西 (© Ellen Goff/Danita Delimont)' },
        { src: './images/2024-09-01.jpg', name: '泰晤士河，伦敦，英国 (© Puthipong Worasaran/Getty Images)' },
        { src: './images/2024-08-31.jpg', name: '撒哈拉沙漠的岩层和沙丘，贾奈特，阿尔及利亚 (© Airpano/Amazing Aerial Agency)' },
        { src: './images/2024-08-30.jpg', name: '鸟头湾的鲸鲨，西巴布亚，印度尼西亚 (© Andy Lerner/Tandem Stills + Motion)' },
        { src: './images/2024-08-29.jpg', name: '富利特堡-德拉罗卡，加泰罗尼亚，西班牙 (© Eloi_Omella/Getty Images)' },
        { src: './images/2024-08-28.jpg', name: '蒙马特和圣心大教堂，巴黎，法国 (© Tuul & Bruno Morandi/Getty Images)' },
        { src: './images/2024-08-27.jpg', name: '黑色凯门鳄幼崽，坦博帕塔国家保护区，秘鲁 (© Maxime Aliaga/Minden Pictures)' },
        { src: './images/2024-08-26.jpg', name: '巴尔米拉环礁国家野生动物保护区，中太平洋 (© Ian Shive/Tandem Stills + Motion)' },
        { src: './images/2024-08-25.jpg', name: '急流湖的日出，冰川国家公园，蒙大拿州，美国 (© Jason Savage/Tandem Stills + Motion)' },
        { src: './images/2024-08-24.jpg', name: '卡塔丁森林和水域国家纪念碑，佩诺布斯科特县，缅因州，美国 (© Cavan Images/Alamy Stock Photo)' },
        { src: './images/2024-08-23.jpg', name: '帕侬蓝寺，武里南府，泰国 (© Banjongseal324/Getty Images)' },
        { src: './images/2024-08-23.jpg', name: '帕侬蓝寺，武里南府，泰国 (© Banjongseal324/Getty Images)' },
        { src: './images/2024-08-22.jpg', name: '海洋城日出时的鸟瞰图，马里兰州，美国 (© Kevin Olson/Amazing Aerial Agency)' },
        { src: './images/2024-08-21.jpg', name: '纳斯卡鲣鸟，沃尔夫岛，加拉帕戈斯群岛，厄瓜多尔 (© Tui De Roy/Minden Pictures)' },
        { src: './images/2024-08-20.jpg', name: '大提顿国家公园日出,怀俄明州,美国 (© Kurt Budliger/TANDEM Stills + Motion)' },
        { src: './images/2024-08-19.jpg', name: 'Bufadero de la Garita，大加那利岛，西班牙 (© Marco Bottigelli/Getty Images)' },
        { src: './images/2024-08-18.jpg', name: '日落时的亨廷顿海滩码头，加利福尼亚州，美国 (© Stan Moniz Photography/TANDEM Stills + Motion)' },
        { src: './images/2024-08-17.jpg', name: '阿尔凡齐纳灯塔，阿尔加维，葡萄牙 (© Andreas Kunz/Getty Images)' },
        { src: './images/2024-08-16.jpg', name: '长岛温泉乐园的过山车，三重县，日本 (© Japanese amateur photographer/Getty Images)' },
        { src: './images/2024-08-15.jpg', name: '韩松洞，风牙者榜国家公园，越南 (© Geng Xu/Getty Images)' },
        { src: './images/2024-08-14.jpg', name: '澳洲魔蜥，瓦塔卡国家公园，澳大利亚 (© Yva Momatiuk and John Eastcott/Minden Pictures)' },
        { src: './images/2024-08-13.jpg', name: '特拉斯契卡自然公园悬崖，杜吉奥托克岛，克罗地亚 (© Ilija Ascic/Shutterstock)' },
        { src: './images/2024-08-12.jpg', name: '非洲象，肯尼亚安博塞利国家公园 (© Ruzdi Ekenheim/Getty Images)' },
        { src: './images/2024-08-11.jpg', name: '通往肯尼迪湖的木板路，温哥华岛，加拿大不列颠哥伦比亚省 (© EB Adventure Photography/Shutterstock)' },
        { src: './images/2024-08-10.jpg', name: '约书亚树国家公园，加利福尼亚州，美国 (© Chris Moore - Exploring Light Photography/TANDEM Stills + Motion)' },
        { src: './images/2024-08-09.jpg', name: '库斯科附近的萨克塞华曼印加遗址，秘鲁 (© SL_Photography/Getty Images)' },
        { src: './images/2024-08-08.jpg', name: '横斑腹小鸮，曼谷，泰国 (© Tfilm/Getty Images)' },
        { src: './images/2024-08-07.jpg', name: '圣约瑟夫北码头内灯和外灯，密歇根州，美国 (© Kenneth Keifer/Getty Images)' },
        { src: './images/2024-08-06.jpg', name: '莫洛基尼，毛伊岛，夏威夷，美国 (© Douglas Peebles/eStock Photo)' },
        { src: './images/2024-08-05.jpg', name: '薰衣草田，赫特福德郡 ，英格兰，英国 (© George W Johnson/Getty Images)' },
        { src: './images/2024-08-04.jpg', name: '黑斑羚和红嘴牛椋鸟，南非 (© Matrishva Vyas/Getty Images)' },
        { src: './images/2024-08-03.jpg', name: '天生三桥，重庆武隆岩溶国家地质公园，中国 (© Pav-Pro Photography Ltd/Shutterstock)' },
        { src: './images/2024-08-02.jpg', name: '象鼻湾，维尔京群岛国家公园，圣约翰岛 (© wheatley/Getty Images)' },
        { src: './images/2024-08-01.jpg', name: '卡普泰湖水上市场，兰加马蒂，孟加拉 (© Azim Khan Ronnie/Amazing Aerial Agency)' },
        { src: './images/2024-07-31.jpg', name: '石林，日落点，布莱斯峡谷国家公园，犹他州，美国 (© Tim Fitzharris/Minden Pictures)' },
        { src: './images/2024-07-30.jpg', name: '圣吉米尼亚诺，锡耶纳，托斯卡纳大区，意大利亚 (© MNStudio/Shutterstock)' },
        { src: './images/2024-07-29.jpg', name: '科贝国家公园的老虎兄弟，北阿坎德邦，印度 (© Sourabh Bharti/Getty Images)' },
        { src: './images/2024-07-28.jpg', name: '斯科讷省海滩上的浴场小屋，瑞典 (© Martin Wahlborg/Getty Images)' },
        { src: './images/2024-07-27.jpg', name: '摩泽尔河谷的葡萄园，莱茵兰-法尔茨，德国 (© Jorg Greuel/Getty Images)' },
        { src: './images/2024-07-26.jpg', name: '塞纳河上的新桥，巴黎，法国 (© f11photo/Getty Images)' },
        { src: './images/2024-07-25.jpg', name: '大烟山国家公园的森林小道，田纳西州，美国 (© putmanphoto/Getty Images)' },
        { src: './images/2024-07-24.jpg', name: '北约克郡的黑面羊羊群，英格兰 (© R A Kearton/Getty Images)' },
        { src: './images/2024-07-23.jpg', name: '迈索尼城堡，麦西尼亚州，希腊 (© Andrew Mayovskyy/Shutterstock)' },
        { src: './images/2024-07-22.jpg', name: '树上的中国小熊猫, 成都, 四川省, 中国 (© Jackyenjoyphotography/Getty Images)' },
        { src: './images/2024-07-21.jpg', name: '肯杜瓦村的木制渔船，桑给巴尔，坦桑尼亚 (© Lubos Paukeje/Alamy Stock Photo)' },
        { src: './images/2024-07-20.jpg', name: '月球 (© Victor Blum/Getty Images)' },
        { src: './images/2024-07-19.jpg', name: '河岸上的一只年轻美洲虎，潘塔纳尔，巴西 (© Tambako the Jaguar/Getty Images)' },
        { src: './images/2024-07-18.jpg', name: 'Coral reef in the Indian Ocean, Mayotte, France (© Gabriel Barathieu/Minden Pictures)' },
        { src: './images/2024-07-17.jpg', name: '德国中世纪城市罗滕堡 (© kanuman/Getty Images)' },
        { src: './images/2024-07-16.jpg', name: '斯卡拉布雷的新石器时代遗迹,奥克尼群岛,苏格兰 (© Paul Williams - FunkyStock/Getty Images)' },
        { src: './images/2024-07-15.jpg', name: '立石公园，神奈川县，日本 (© blew_s/Shutterstock)' },
        { src: './images/2024-07-14.jpg', name: '女王花园群岛的镰形真鲨，古巴 (© Christian Vizl/Tandem Stills + Motion)' },
        { src: './images/2024-07-13.jpg', name: '卡帕多西亚的童话烟囱和窑洞，土耳其 (© Storm Is Me/Shutterstock)' },
        { src: './images/2024-07-12.jpg', name: '雷尼尔山国家公园的野花，华盛顿州，美国 (© RomanKhomlyak/Getty Images)' },
        { src: './images/2024-07-11.jpg', name: '甘吉，西西里岛，意大利 (© Andrea Caruso/Amazing Aerial Agency)' },
        { src: './images/2024-07-10.jpg', name: '领簇舌巨嘴鸟，哥斯达黎加 (© Juan Carlos Vindas/Getty Images)' },
        { src: './images/2024-06-21.jpg', name: '蓝色水面上的渔船航拍图，郴州市，湖南省，中国 (© Haitong Yu/Getty images)' },
        { src: './images/2024-06-22.jpg', name: '亚马逊雨林，巴西 (© Claus Meyer/plainpicture)' },
        { src: './images/2024-06-23.jpg', name: '达卡环形交叉路口的鸟瞰图，孟加拉国 (© Azim Khan Ronnie/Amazing Aerial Agency)' },
        { src: './images/2024-06-24.jpg', name: '克里穆图的火山口湖，弗洛勒斯岛，印度尼西亚 (© Shane P. White/Minden Pictures)' },
        { src: './images/2024-06-25.jpg', name: '火浪岩层，火焰谷州立公园，内华达州，美国 (© Clint Losee/Tandem Stills + Motion)' },
        { src: './images/2024-06-26.jpg', name: '考氏鳍竺鲷与海葵，蓝碧海峡，北苏拉威西，印度尼西亚 (© Constantinos Petrinos/NPL/Minden Pictures)' },
        { src: './images/2024-06-27.jpg', name: '黄昏时分的圣母百花大教堂，佛罗伦萨，意大利 (© Elena Pueyo/Getty Images)' },
        { src: './images/2024-06-28.jpg', name: '诺曼底海岸的绍塞群岛，法国 (© Tuul & Bruno Morandi/Getty Images)' },
        { src: './images/2024-06-29.jpg', name: '宁哈根的山毛榉林，梅克伦堡-前波美拉尼亚州，德国 (© Martin Ruegner/Getty Images)' },
        { src: './images/2024-06-30.jpg', name: '乌布寺庙的石雕,巴厘岛,印度尼西亚 (© R. Schönebaum/plainpicture)' },
        { src: './images/2024-07-01.jpg', name: '菲斯加德灯塔，埃斯奎莫尔特港，科尔伍德，不列颠哥伦比亚省，加拿大 (© davemantel/Getty Images)' },
        { src: './images/2024-07-02.jpg', name: '意大利卡，桑蒂蓬塞的一座古罗马城市，塞维利亚，安达卢西亚，西班牙 (© Moses Palermo/Amazing Aerial Agency) ' },
        { src: './images/2024-06-03.jpg', name: '猫鼬家族 (© anetapics/Shutterstock)' },
        { src: './images/2024-06-04.jpg', name: '扎哈拉德拉谢拉，安达卢西亚，西班牙 (© Francesco Carovillano/eStock Photo)' },
        { src: './images/2024-06-05.jpg', name: '丹翠雨林的诺亚海滩，昆士兰州，澳大利亚 (© bjeayes/Getty Images)' },
        { src: './images/2024-06-06.jpg', name: '从康威河眺望康威城堡，威尔士 (© David Chapman/Alamy Stock Photo)' },
        { src: './images/2024-06-07.jpg', name: '越南安沛省木仓寨的水稻梯田 (© Kiatanan Sugsompian/Getty Images)' },
        { src: './images/2024-06-08.jpg', name: '野生蓝莓 (© Baac3nes/Getty Images) ' },
        { src: './images/2024-06-09.jpg', name: '阿根廷拉里奥哈省塔兰帕亚国家公园 (© Gonzalo Azumendi/Getty Images)' },
    ];

    const createImageElement = (image, index) => {
        const item = document.createElement('div');
        item.classList.add('gallery-item', 'fade-in');

        const img = document.createElement('img');
        if (index < 3) {
            img.src = image.src;
        } else {
            img.src = 'https://gitcode.net/rong6ya/myfiles/-/raw/master/img/tips.jpg';
            img.setAttribute('data-src', image.src);
        }
        img.alt = image.name;

        const name = document.createElement('div');
        name.classList.add('image-name');
        name.textContent = image.name;

        item.appendChild(img);
        item.appendChild(name);
        gallery.appendChild(item);

        // 灯箱
        img.addEventListener('click', () => {
            if (img.src === './xx.png') {
                img.src = img.getAttribute('data-src');
            }
            openLightbox(image);
        });
    };

    images.forEach((image, index) => createImageElement(image, index));

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const caption = document.getElementById('caption');
    const downloadLink = document.getElementById('download-link');
    const closeBtn = document.querySelector('.close');

    const openLightbox = (image) => {
        lightbox.style.display = 'block';
        lightboxImg.src = image.src;
        caption.textContent = image.name;
        downloadLink.href = image.src;
        downloadLink.download = image.name;
    };

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target === closeBtn) {
            lightbox.style.display = 'none';
        }
    });

    // 显示footer
    gallery.addEventListener('load', () => {
        document.getElementById('footer').style.display = 'block';
    }, true);
});
