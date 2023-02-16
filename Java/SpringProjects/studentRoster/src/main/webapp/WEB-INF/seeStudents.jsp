<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>${dorm.name}'s Students</title>
</head>
<body>
	<h1><c:out value="${dorm.name}"/>'s Students</h1>
	<div>
		<span>
			<form action="#" method="post">
			<label path="dorm">Students</label>
			<select path="dorm">
				<c:forEach var="student" items="${dorm.students}">
				<option value="${student.id}">${student.name}</option>
				</c:forEach>
			</select>
			</form>
		</span>
	</div>
	<div>
		<c:forEach var="student" items="${dorm.students}">
		<p>${student.name}</p>
		</c:forEach>
	</div>
</body>
</html>