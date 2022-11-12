insert into users (first_name, last_name)
values ('Jesse','Cole'),('Kasey','Sanders'),('Lori','Cole'),('Jude','Cole'),('Ethan','Cole'),('Devin','Borjas');
select * from users;
insert into friendships (user_id, friend_id)
values (1,2),(1,3),(1,4),(1,5),(1,6),(2,4),(2,6),(3,1),(3,4),(3,5),(4,1),(4,3),(4,5),(5,1),(5,3),(5,4),(6,1);
select * from friendships;
delete from friendships 
where id between 18 and 34;
select user_id, friend_id, users.first_name, users.last_name from friendships
join users on user_id = users.id
where friend_id = 4;
select users.first_name, users.last_name, friendships.user_id, user2.first_name as friend, friendships.friend_id from users
join friendships on users.id = user_id
left join users as user2 on friend_id = user2.id