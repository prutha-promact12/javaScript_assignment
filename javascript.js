var check_value=
			[
                 {languagename : "C/C++",Isenable : "True"},
                 {languagename : "Java",Isenable  : "True"},
                 {languagename : "C#",Isenable  : "False"},
                 {languagename : "PHP",Isenable  : "False"},
                 {languagename : "Pyphon",Isenable  : "False"},
                 ];
		function addOption(selectbox, text,value)
		{
			var optn= document.createElement("OPTION");
			optn.text=text;
			optn.value=value;
			selectbox.options.add(optn);
		}
		function addQualification_list()
		{
			var qualification_list= new Array("MCA", "BCA", "BE" ,"ME");
			var experience= new Array("6 Month","1 Year","2 Year","3 Year","4 Year","5 Year");

			for(var i=0; i < qualification_list.length; ++i)
			{
				addOption(document.item_list.qualification, qualification_list[i],qualification_list[i]);
			}
			for(var i=0; i < experience.length; ++i)
			{
				addOption(document.item_list.experience_list, experience[i],experience[i]);
			}
			for (var i=0; i < check_value.length; i++)
			{
					var cbh = document.getElementById('cb');
					var val = '1';
					var cap = check_value[i].languagename;
					var br =document.createElement("br");
					var cbc = document.createElement('input');
					cbc.type = 'checkbox';
					cbc.name = val;
					cbc.value = cap;
					cbh.appendChild(cbc);
					cb.appendChild(document.createTextNode(cap));
					cb.appendChild(br);
					if (check_value[i].Isenable === "True")
					{
						cbc.checked=true;
					}
			}
		}
		/*function myFunction()
		{
               var gen=document.querySelector('input[name=gender]:checked').value;
			  
                
                var firstname = document.forms["item_list"]["first"].value;
                var lastname = document.forms["item_list"]["last"].value;
                var email = document.forms["item_list"]["email"].value;
                var number = document.forms["item_list"]["contactno"].value;
                var address = document.forms["item_list"]["address"].value;
                var username = document.forms["item_list"]["username"].value;
                var password = document.forms["item_list"]["password"].value;
                var exp=document.forms["item_list"]["experience_list"].value;
                var qual=document.forms["item_list"]["qualification"].value;
                var txt =[];
                txt.push(firstname,lastname,email,number,address,username,password,gentxt,qual,exp,gen);
                    
                console.log(txt);
            
		}*/
		function myFunction(){
                
                /*var lan=document.querySelectorAll('input[name=check_value]:checked).value;
                //var gentxt="";
                //for(var i=0;i<gen.length;i++){
                //  if(gen[i].checked){
                //      gentxt=gentxt+gen[i].value+ " ";
                //  }
                //}
                
                for(var i = 0; i < lan.length; i++) {
                    if(lan[i].checked) {
                    var lantxt=lan[i].value;
                    }
                }
                */
				/*var list=document.querySelectorAll('input[name=check_value]:checked').value;
				var l=list.length;
				var gentxt="";
				for(var i=0; i < l;i++)
				{
                    if(list[i].checked){
                        gentxt=gentxt+list[i].value+ ", ";
                    }
                }*/
				var lantxt=[];
				 var lan=document.querySelectorAll('input[type=checkbox]');
                //console.log("lan",lan);
                //var gentxt="";
                //for(var i=0;i<gen.length;i++){
                //    if(gen[i].checked){
                //        gentxt=gentxt+gen[i].value+ " ";
                //    }
                //}
                
                for(var i = 0; i < lan.length; i++) {
                    if(lan[i].checked) {
                        console.log("lan[i]",lan[i].value)
                        lantxt.push(lan[i].value);
                    }
                }
                var obj={
                firstname : document.forms["item_list"]["first"].value,
                lastname : document.forms["item_list"]["last"].value,
                email : document.forms["item_list"]["email"].value,
                number : document.forms["item_list"]["contactno"].value,
                address : document.forms["item_list"]["address"].value,
                username : document.forms["item_list"]["username"].value,
                pwd : document.forms["item_list"]["password"].value,
                exp:document.forms["item_list"]["experience_list"].value,
                qual:document.forms["item_list"]["qualification"].value,
                gen:document.querySelector('input[name=gender]:checked').value,
                lang:lantxt};
               
                    
                console.log(obj);
            }