import json
from pprint import pprint
json_data=open('cuestionarios.json')
data = json.load(json_data)
json_data.close()

for i in range(2,297):
	mycad = (data[i]["answer_data"])
	alt = mycad.split('{')	
	print "-"*30
	gato = {}
	for j in range(2,7):
		resp2 = alt[j].split('"')		
		gato[j-2]=resp2[3]
		if(resp2[10][3]== "1"):			
			data[i]["answer"]=j-2;
		print resp2[3]
	print data[i]["answer"]
	data[i]["alt"]=gato;
	data[i].pop("answer_data",0);
	data[i].pop("correct_same_text",0);
	data[i].pop("show_points_in_box",0);
	data[i].pop("incorrect_msg",0);
	data[i].pop("matrix_sort_answer_criteria_width",0);
	data[i].pop("answer_points_diff_modus_activated",0);
	data[i].pop("answer_points_activated",0);
	data[i].pop("answer_points_activated",0);
	data[i].pop("online",0);
	data[i].pop("points",0);
	data[i].pop("quiz_id",0);
	data[i].pop("quiz_id",0);
	data[i].pop("tip_msg",0);
	data[i].pop("tip_enabled",0);
	data[i].pop("answer_type",0);
	data[i].pop("category_id",0);
	data[i].pop("disable_correct",0);
	data[i].pop("correct_msg",0);



# for i in range(2,10):
# 	for j in range(5):
# 		print data[i]["alt"][j]
# 	print "-"*30
pprint (data)
with open('resultado.json', 'w') as outfile:
  json.dump(data, outfile)




