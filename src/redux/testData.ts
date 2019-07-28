import { Businesses } from "./state";

const data: Businesses = {
	bqq: {
		id: 'bbq',
		name: 'Gyu-Kaku Japanese BBQ',
		status: 'open',
		rating: 4.9,
		ratingNum: 623,
	    address: '40-52 Main St floor 2, Flushing, NY 11354',
		hours: ["11:30AM", "10:45"],  
		gallery: [
			{
				url: 'https://cdn.vox-cdn.com/thumbor/JrW3NVsZfxSF6k6IMqGD6_tWUSc=/0x0:2048x1365/1200x800/filters:focal(861x520:1187x846)/cdn.vox-cdn.com/uploads/chorus_image/image/63306268/Gyu_Kaku.0.jpg',
				description: "BEST BBQ EVER"
			}
		]
	},

	joes: {
		id: 'joes',
		name: "Joe's Shanghai",
		status: 'open',
		rating: 4.6,
		ratingNum: 86,
	  	address: '136-21 37th Avenue, Flushing, NY 11354',
		hours: ["11AM", "10:30PM"],
		gallery:[
			  {
				  url: 'http://images.foodmento.com/U3P1248F11148-1399142793-208.jpg',
				  description: "Joes ShangHai"
			  }
		  ]
	},
	dump: {
		id: 'dump',
		name: 'Dumpling Galaxy',
		status: 'open',
		rating: 4.0,
		ratingNum: 442,
		address: '42-35 Main St, Flushing, NY 11355',
		hours: ["9AM", "10PM"],
		gallery:[
			{
				url:'https://cdn.vox-cdn.com/thumbor/tDEOFSKAoWZibSnnns_EgzaEFGk=/0x0:2300x1533/1200x800/filters:focal(772x310:1140x678)/cdn.vox-cdn.com/uploads/chorus_image/image/61805805/dumplinggalaxy_dumplinghotpot.0.0.jpg',
				description: "ITS DUMPLING!"  
			}
	  ]
	},
	loc2: {
		id: 'loc2',
		name: 'Spring Shabu-Shabu',
		status: "open",
		rating: 4.5,
		ratingNum: 85,
		address: '136-20 38th Ave 2nd Floor, Flushing, NY 1134',
		hours: ["11AM", "10PM"],
		gallery:[
			{
				url: 'https://static1.squarespace.com/static/5a1c51b8f9a61edc99df6917/t/5ae1de860e2e72a5566809a8/1524752011586/overview2.jpg?format=1500w',
				description: "SUSHI"
			}
		] 
	},

	loc1: {
		id: "loc1",
		name: 'Cha Cha Tang',
		status: "open",
		rating: 4.3,
		ratingNum: 1232,
		address: '45 Mott St, New York, NY 10013',
		hours: ["7AM", "10PM"],
		gallery: [
			{
				url: 'https://i.pinimg.com/474x/b7/f6/1a/b7f61a21f4e46712ab3eac3940357c2b--portfolio-sausages.jpg',
				description: "HEYA"
			}
		]
	},
	test: {
		id: "test",
		name: "Ramen store",
		status: "open",
		rating: 4.3,
		ratingNum: 123,
		address: "111 ST NY, 11223",
		hours: ["7AM", "8PM"],
		gallery: [
			{
				url: "https://cdn.dribbble.com/users/371094/screenshots/3884115/ramen.jpg",
				description: "good morning!"
			}
		]
	},
	hello: {
		id: "hello",
		name: "Donut store",
		status: "close",
		rating: 3.1,
		ratingNum: 10,
		address: "222 ST NY, 12031",
		hours: ["9AM", "5PM"],
		gallery: [
			{
				url: "https://exploremcallen.com/wp-content/uploads/2018/05/mcallen-donut-day.jpg",
				description: "blablabla"
			}
		]
	},
	":)": {
		id: ":)",
		name: "Chinese food store",
		status: "open",
		rating: 4.7,
		ratingNum: 2034,
		address: "333 ST NY, 11223",
		hours: ["9AM", "6PM"],
		gallery: [
			{
				url:
					"https://www.ediblebrooklyn.com/wp-content/uploads/sites/2/2017/12/IMG_1339.jpg",
				description: "YUM"
			}
		]
	}
};


let BusinessList: Object[] = [
	{
	  url: 'https://i.pinimg.com/474x/b7/f6/1a/b7f61a21f4e46712ab3eac3940357c2b--portfolio-sausages.jpg',
	  names: 'Cha Cha Tang',
	  address: '45 Mott St, New York, NY 10013',
	  openHours: '7am-10pm',
	  phone: '(212) 577-2888'
	},
	{
	  url: 'https://static1.squarespace.com/static/5a1c51b8f9a61edc99df6917/t/5ae1de860e2e72a5566809a8/1524752011586/overview2.jpg?format=1500w',
	  names: 'Spring Shabu-Shabu',
	  address: '136-20 38th Ave 2nd Floor, Flushing, NY 1134',
	  openHours: '11am-10pm',
	  phone: '(718) 395-8076'  
	},
	{
	  url: 'https://cdn.vox-cdn.com/thumbor/tDEOFSKAoWZibSnnns_EgzaEFGk=/0x0:2300x1533/1200x800/filters:focal(772x310:1140x678)/cdn.vox-cdn.com/uploads/chorus_image/image/61805805/dumplinggalaxy_dumplinghotpot.0.0.jpg',
	  names: 'Dumpling Galaxy',
	  address: '42-35 Main St, Flushing, NY 11355',
	  openHours: '9am-10pm',
	  phone: '(718) 461-0808'  
	},
	{
	  url: 'http://images.foodmento.com/U3P1248F11148-1399142793-208.jpg',
	  names: "Joe's Shanghai",
	  address: '136-21 37th Avenue, Flushing, NY 11354',
	  openHours: '11am-10:30pm',
	  phone: '(718) 539-3838'  
	},
	{
	  url: 'https://cdn.vox-cdn.com/thumbor/JrW3NVsZfxSF6k6IMqGD6_tWUSc=/0x0:2048x1365/1200x800/filters:focal(861x520:1187x846)/cdn.vox-cdn.com/uploads/chorus_image/image/63306268/Gyu_Kaku.0.jpg',
	  names: 'Gyu-Kaku Japanese BBQ',
	  address: '40-52 Main St floor 2, Flushing, NY 11354',
	  openHours: '11:30am-10:45pm',
	  phone: '(347) 542-3653'  
	},
  ]
export default data;