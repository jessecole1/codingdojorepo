<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>New Student</title>
</head>
<body>
	<h1>New Student</h1>
	<form:form action="/new/student" method="post" modelAttribute="student">
	<div>
		<span><form:label path="name">Name:</form:label></span>
		<span><form:input path="name" type="text"/></span>
	</div>
	<div>
		<span><form:label path="dorm">Dorm:</form:label></span>
		<span>
			<form:select path="dorm">
				<c:forEach var="dorm" items="${dorms}">
				<option value="${dorm.id}">${dorm.name}</option>
				</c:forEach>
			</form:select>
		</span>
	</div>
	<div>
		<button>Add</button>
	</div>
	</form:form>
</body>
</html>