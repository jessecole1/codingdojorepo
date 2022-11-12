insert into users (first_name, last_name, email, created_at, updated_at)
values('Jesse','Cole','jesse@email.com',now(),now()),('Kasey','Sanders','kasey@aol.com',now(),now()),('Ethan','Cole','Ethan@email.com',now(),now());
select * from users;
select * from users
where email = 'jesse@email.com';
select * from users
where id = 3;
update users
set last_name = 'Pancakes' where id = 3;
delete from users where id = 2;
select * from users
order by first_name asc;
select * from users
order by first_name desc;