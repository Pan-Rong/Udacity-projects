// 创建坐标
var coordinates =[{     
        title: "天安门", 
        position: [116.39756, 39.908808],
        address: "北京市东城区东长安街天安门旅游文物古迹风景区",
        englishName: "Tiananmen"
    },{
        title: "圆明园", 
        position:[116.30276, 40.00838],
        address: "北京西北郊海淀区圆明园旅游文物古迹风景区",
        englishName: "Old Summer Palace"
    },{
        title: "颐和园", 
        position:[116.272852,39.992273],
        address: "北京西北郊海淀区颐和园旅游文物古迹风景区",
        englishName: "Summer Palace"
    },{
        title: "鸟巢", 
        position:[116.396203,39.993575],
        address: "中国北京市朝阳区国家体育场南路1号",
        englishName: "Beijing National Stadium"
    },{
        title: "朝阳公园", 
        position:[116.482860,39.94420],
        address: "北京市朝阳公园南路1号",
        englishName: "Chaoyang Park"
    }
];
var listContentThis;
var ListConent = function() {
    this.iconListCss = ko.observableArray([{iconList: true},{iconList: true},{iconList: true}]);
    this.searchListHidden = ko.observable(false);
    this.location = ko.observable("北 京");
    this.showLocationList = ko.observableArray(coordinates);
    listContentThis = this;
}
var ViewModel = function() {
    this.currentList = ko.observable(new ListConent());//显示当前列表信息
    
    this.toggleMenu = function(event) {
            var state;
            if(this.searchListHidden()) {
                $("#map").css({left:'0'});
                state = false;
            }else {
                $("#map").css({left:'200px'});
                state = true;
            }
            this.searchListHidden(state);
    };
}
ko.applyBindings(new ViewModel());
