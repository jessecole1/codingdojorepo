<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>New Ninja</title>
</head>
<body>
	<h1>New Ninja</h1>
	<form:form action="/ninja/new" method="post" modelAttribute="ninja">
	<form:label path="firstName">First Name</form:label>
	<form:input path="firstName" type="text"/>
	<form:label path="lastName">Last Name</form:label>
	<form:input path="lastName" type="text"/>
	<form:label path="age">Age</form:label>
	<form:input path="age" type="number"/>
	<form:label path="dojo" type="select">Dojo</form:label>
	<form:select path="dojo">
		<c:forEach var="doj" items="${dojos}">
		<option value="${doj.id}">${doj.name}</option>
		</c:forEach>
	</form:select>
	<button>Create</button>
	</form:form>
</body>
</html>