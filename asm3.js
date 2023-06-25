    let number=0;    
    $(document).ready(function(){


        //nhập điểm
        $("#btn-nhap").click(function(){
            let name=$("#name").val();
            let math=Number($('#math').val());
            let phy=Number($('#phy').val());
            let che=Number($('#che').val());
        if(name==""||math==""||phy==""||che==""){
            alert("Không được để trống bất kỳ trường nào");        
        }
        else if(isNaN(math)||math>10||math<0){
            alert("Điểm Toán đang không hợp lệ hãy nhập lại số từ 0-10");        
        }
        else if(isNaN(phy)||phy>10||phy<0){
            alert("Điểm Lý đang không hợp lệ hãy nhập lại số từ 0-10"); 
        }
        else if(isNaN(che)||che>10||che<0){
            alert("Điểm Hóa đang không hợp lệ hãy nhập lại số từ 0-10"); 
        }
        else
        {        
        number++;
        
        $("#name").val("");
        $("#math").val("");
        $("#che").val("");
        $("#phy").val("");
        $('#result').append("<tr class='info'><td class='stt'>"+number+"</td><td>"+name+"</td><td class='subjects'>"+math+"</td><td class='subjects'>"+phy+"</td><td class='subjects'>"+che+"</td><td class='totalmark'>?</td></tr>")
            /* for(let i=0;i<data.length;i++){
                console.log($('.info').eq(i).find('.stt').text());
            } */
       
        }
        });



        //điểm tb
        $('#btn-tb').click(function(){
            $(".info").each(function(){
                let total=0;
                $(this).find('.subjects').each(function(){
                    let marks=Number($(this).text());
                    total+=marks;
                });
                let resultmark=(Math.floor((total/3)*10))/10;
                $(this).find('.totalmark').html(resultmark);
            });
        });




        //hoc sinh gioi
        $('#btn-hsg').click(function(){
            $('.info').each(function(){
                let x=Number($(this).find('.totalmark').text());
                console.log(x);
                if(x!="?"&& x>=8){                    
                $(this).css('color','red');
                }                
            });
        });




        //xoa sv
        $('#btn-del').click(function(){
            let sv=parseInt(prompt("Số thứ tự của sinh viên muốn xóa:"));
                if(isNaN(sv)||sv<1){
                    alert("Số đã nhập không hợp lệ");
                }
                else if(sv>number){
                    alert("Không có sinh viên này!");
                }
                else{
                    try {
                        $('#result').find('.info').eq(sv-1).remove();
                        number--;
                        for(let i=0;i<number;i++){
                            $('.info').eq(i).find('.stt').text(i+1);  
                        }
                    } catch (error) {
                        alert("Không có sinh viên này!");
                    }                  
                }
        });
    });  

