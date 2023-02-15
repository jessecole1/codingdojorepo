<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>New Dorm</title>
</head>
<body>
	<h1>New Dorm</h1>
	<form:form action="/new/dorm" method="post" modelAttribute="dorm">
	<div>
		<span><form:label path="name">Name:</form:label></span>
		<span><form:input path="name" type="text"/></span>
	</div>
	<div>
		<button>Add</button>
	</div>
	</form:form>
</body>
</html>