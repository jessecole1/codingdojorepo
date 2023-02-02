<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Omikuji Fortune</title>
<link rel="stylesheet" type="text/css" href="/css/style.css">
</head>
<body>
	<h1>Send an Omikuji!</h1>
	<div class="container">
		<form action='/send' method='POST'>
			<div>
				<label>Pick any number from 5 to 25.</label>
				<input type="number" name="number"></input>
			</div>
			<div>
				<label>Enter the name of any city.</label>
				<input type="text" name="city"></input>
			</div>
			<div>
				<label>Enter the name of any real person.</label>
				<input type="text" name="person"></input>
			</div>
			<div>
				<label>Enter a professional endeavor or hobby.</label>
				<input type="text" name="hobby"></input>
			</div>
			<div>
				<label>Enter any type of living thing.</label>
				<input type="text" name="living"></input>
			</div>
			<div>
				<label>Say something nice to someone.</label>
				<textarea name="nice"></textarea>
			</div>
			<span>Send and show a friend</span>
			<span><button>Send</button></span>
		</form>
	</div>
</body>
</html>