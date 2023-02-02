<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>Here's your Omikuji!</h1>
	<p>
		In <c:out value="${number}"></c:out> years, you will live in <c:out value="${city}"></c:out>
		with <c:out value="${person}"></c:out>, <c:out value="${hobby}"></c:out> for a living. The next 
		time you see a <c:out value="${living}"></c:out>, you will have good luck. <c:out value="${nice}"></c:out>
	</p>
</body>
</html>