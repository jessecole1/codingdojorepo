<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Hopper's Main</title>
<link rel="stylesheet" type="text/css" href="/css/style.css">
<script type="text/javascript" src="/js/app.js"></script>
</head>
<body>
		<h1>Customer's Name: <c:out value="${wholeName}" /></h1>
		<p>Item name: <c:out value="${itemsName}"/> </p>
		<p>Price: $<c:out value="${thePrice}"/></p>
		<p>Description: <c:out value="${theDescription}"/></p>
		<p>Vendor: <c:out value="${theVendor}"/></p>
</body>
</html>