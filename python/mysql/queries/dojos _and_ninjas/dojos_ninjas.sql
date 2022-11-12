insert into dojos (name, created_at, updated_at)
values('Los Angeles', now(), now()),('Orange County', now(), now()),('San Francisco', now(), now());
select * from dojos;
delete from dojos 
where dojos.id = 2 or dojos.id = 3;
select * from dojos;
insert into dojos (name, created_at, updated_at)
values('Chicago', now(), now()),('New York', now(), now()), ('San Diego', now(), now());
select * from dojos;
insert into ninjas (first_name, last_name, age, created_at, updated_at, dojo_id)
values('Jesse','Cole',28, now(), now(), 4);
select * from ninjas;
insert into ninjas (first_name, last_name, age, created_at, updated_at, dojo_id)
values('Kasey','Sanders',28, now(), now(), 4),('Ethan','Cole',26, now(), now(), 4);
select * from ninjas;
insert into ninjas (first_name, last_name, age, created_at, updated_at, dojo_id)
values ('Martin','Garrix',28, now(), now(), 5),('Tim','Bergling', 28, now(), now(), 5),('Nicky','Romero',30, now(), now(), 5);
insert into ninjas (first_name, last_name, age, created_at, updated_at, dojo_id)
values ('Devin','Borjas', 28, now(), now(), 6),('Sargon','Barkowi',28, now(), now(), 6),('Noah','Dach',28, now(), now(), 6);
select * from dojos
left join ninjas on dojos.id = ninjas.dojo_id
where dojos.id = 4;
select * from dojos
left join ninjas on dojos.id = ninjas.dojo_id
where dojos.id = (select dojo_id from ninjas order by dojo_id desc limit 1);
select id, name from dojos 
where dojos.id = (select dojo_id from ninjas order by dojo_id desc limit 1);