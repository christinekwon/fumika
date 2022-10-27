import i000 from './src/000.jpg';
import i001 from './src/001.jpg';
import i002 from './src/002.jpg';
import i003 from './src/003.jpg';
import i004 from './src/004.jpg';
import i005 from './src/005.jpg';
import i006 from './src/006.jpg';
import i007 from './src/007.jpg';
import i008 from './src/008.jpg';
import i009 from './src/009.jpg';
import i010 from './src/010.jpg';
import i011 from './src/011.jpg';
import i012 from './src/012.jpg';
import i013 from './src/013.jpg';
import i014 from './src/014.jpg';
import i015 from './src/015.jpg';
import i016 from './src/016.jpg';
import i017 from './src/017.jpg';
import i018 from './src/018.jpg';
import i019 from './src/019.jpg';
import i020 from './src/020.jpg';
import i021 from './src/021.jpg';
import i022 from './src/022.jpg';
import i023 from './src/023.jpg';
import i024 from './src/024.jpg';
import i025 from './src/025.jpg';
import i026 from './src/026.jpg';
import i027 from './src/027.jpg';
import i028 from './src/028.jpg';
import i029 from './src/029.jpg';
import i030 from './src/030.jpg';
import i031 from './src/031.jpg';
import i032 from './src/032.jpg';
import i033 from './src/033.jpg';
import i034 from './src/034.jpg';
import i035 from './src/035.jpg';
import i036 from './src/036.jpg';
import i037 from './src/037.jpg';
import i038 from './src/038.jpg';
import i039 from './src/039.jpg';
import i040 from './src/040.jpg';
import i041 from './src/041.jpg';
import i042 from './src/042.jpg';
import i043 from './src/043.jpg';
import i044 from './src/044.jpg';
import i045 from './src/045.jpg';
import i046 from './src/046.jpg';
import i047 from './src/047.jpg';
import i048 from './src/048.jpg';
import i049 from './src/049.jpg';
import i050 from './src/050.jpg';
import i051 from './src/051.jpg';
import i052 from './src/052.jpg';
import i053 from './src/053.jpg';
import i054 from './src/054.jpg';
import i055 from './src/055.jpg';
import i056 from './src/056.jpg';
import i057 from './src/057.jpg';
import i058 from './src/058.jpg';
import i059 from './src/059.jpg';
import i060 from './src/060.jpg';
import i061 from './src/061.jpg';
import i062 from './src/062.jpg';
import i063 from './src/063.jpg';
import i064 from './src/064.jpg';
import i065 from './src/065.jpg';
import i066 from './src/066.jpg';
import i067 from './src/067.jpg';
import i068 from './src/068.jpg';
import i069 from './src/069.jpg';
import i070 from './src/070.jpg';
import i071 from './src/071.jpg';
import i072 from './src/072.jpg';
import i073 from './src/073.jpg';
import i074 from './src/074.jpg';
import i075 from './src/075.jpg';
import i076 from './src/076.jpg';
import i077 from './src/077.jpg';
import i078 from './src/078.jpg';
import i079 from './src/079.jpg';
import i080 from './src/080.jpg';
import i081 from './src/081.jpg';
import i082 from './src/082.jpg';
import i083 from './src/083.jpg';
import i084 from './src/084.jpg';
import i085 from './src/085.jpg';
import i086 from './src/086.jpg';
import i087 from './src/087.jpg';
import i088 from './src/088.jpg';
import i089 from './src/089.jpg';
import i090 from './src/090.jpg';
import i091 from './src/091.jpg';
import i092 from './src/092.jpg';
import i093 from './src/093.jpg';
import i094 from './src/094.jpg';
import i095 from './src/095.jpg';
import i096 from './src/096.jpg';
import i097 from './src/097.jpg';
import i098 from './src/098.jpg';
import i099 from './src/099.jpg';
import i100 from './src/100.jpg';
import i101 from './src/101.jpg';
import i102 from './src/102.jpg';
import i103 from './src/103.jpg';
import i104 from './src/104.jpg';
import i105 from './src/105.jpg';
import i106 from './src/106.jpg';
// import i107 from './src/107.jpg';
// import i108 from './src/108.jpg';
// import i109 from './src/109.jpg';

class Images {
    constructor() {
        const images = [
            i000,
            i001,
            i002,
            i003,
            i004,
            i005,
            i006,
            i007,
            i008,
            i009,
            i010,
            i011,
            i012,
            i013,
            i014,
            i015,
            i016,
            i017,
            i018,
            i019,
            i020,
            i021,
            i022,
            i023,
            i024,
            i025,
            i026,
            i027,
            i028,
            i029,
            i030,
            i031,
            i032,
            i033,
            i034,
            i035,
            i036,
            i037,
            i038,
            i039,
            i040,
            i041,
            i042,
            i043,
            i044,
            i045,
            i046,
            i047,
            i048,
            i049,
            i050,
            i051,
            i052,
            i053,
            i054,
            i055,
            i056,
            i057,
            i058,
            i059,
            i060,
            i061,
            i062,
            i063,
            i064,
            i065,
            i066,
            i067,
            i068,
            i069,
            i070,
            i071,
            i072,
            i073,
            i074,
            i075,
            i076,
            i077,
            i078,
            i079,
            i080,
            i081,
            i082,
            i083,
            i084,
            i085,
            i086,
            i087,
            i088,
            i089,
            i090,
            i091,
            i092,
            i093,
            i094,
            i095,
            i096,
            i097,
            i098,
            i099,
            i100,
            i101,
            i102,
            i103,
            i104,
            i105,
            i106,
            // i107
        ];
        this.images = images;
    }

    getImage() {
        const len = this.images.length;

        let id = Math.floor(Math.random() * len);

        while (id == 34 || id == 35) {
            id = Math.floor(Math.random() * len);
        }
        console.log(id);
        return this.images[id];
    }

    getImages(num) {
        let count = 0;
        let len = this.images.length;
        let id;
        let idList = [];
        let imageList = [];
        while (count < num) {
            id = Math.floor(Math.random() * len);
            // if (!idList.includes(id)) {
            idList.push(id);
            imageList.push(this.images[id]);
            count += 1;
            // }
        }

        return imageList;
    }
}





export default Images;