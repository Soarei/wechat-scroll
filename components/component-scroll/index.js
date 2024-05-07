Component({
    data:{
        chatlist:[
          {
            role:'user',
            context:'你好',
          },
          {
            role:'machine',
            context:'你好',
          },
          {
            role:'user',
            context:'你好',
          },
          {
            role:'machine',
            context:'你好',
          },
          {
            role:'user',
            context:'你好',
          },
          {
            role:'machine',
            context:'你好',
          },
          {
            role:'user',
            context:'你好',
          },
          {
            role:'machine',
            context:'你好',
          },
          {
            role:'user',
            context:'你好',
          },
          {
            role:'machine',
            context:'你好',
          },
          {
            role:'user',
            context:'你好',
          },
          {
            role:'machine',
            context:'你好',
          },
          {
            role:'user',
            context:'你好',
          },
          {
            role:'machine',
            context:'你好',
          },
          {
            role:'user',
            context:'你好',
          },
          {
            role:'machine',
            context:'你好',
          },
          {
            role:'user',
            context:'你好',
          },
          {
            role:'machine',
            context:'你好',
          },
          
        ], //存放消息的数组
        loadAll:false, //是否消息加载完了,mock数据暂时不需要用到这个
        toView:'', //scroll-into-view的节点
        isRreshing:false, //是否正在加载数据
    },
    methods:{
        //下拉加载数据
        onRefresh() {
          if(this.data.chatlist.length > 18) return
          this.setData({
            isRreshing:true
          },()=>{
            this.getMessageList()
          })
        },
        //滑动到顶部加载
        handleScrollUpper(e) {
          if(!this.data.isRreshing && this.data.chatlist.length > 18){
              this.setData({
                isRreshing:true
              },()=>{
                this.getMessageList()
              })
          }
        },
        // 获取消息数据
        getMessageList() {
          //模拟异步获取数据
          var timestamp = new Date().getTime()
          var ma_timestamp = new Date().getTime() + 1
          let chatlist = this.data.chatlist
          let messagelist = [{role:'user',context:'你好'+timestamp,id:'stime'+timestamp},{role:'machine',context:'你好'+ma_timestamp,id:'stime'+ma_timestamp}]
          setTimeout(()=>{
            messagelist.push({role:'user',context:'你好'+new Date().getTime(),id:'stime'+new Date().getTime()},{role:'machine',context:'你好'+new Date().getTime() + 1,id:'stime'+new Date().getTime() + 1})
            chatlist.unshift(...messagelist)
            this.setData({
              chatlist,
              toView:messagelist[messagelist.length - 1].id,
              isRreshing:false,
            })
          },3000)
        }
    }
})