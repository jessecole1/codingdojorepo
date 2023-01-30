<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="/css/style.css">
</head>
<body>
	<h1>Fruit Store</h1>
	<div class="pinkBackground">
		<div class="whiteBackground">
			<table class="fruitTable">
				<thead class="tableHead flexOne">
					<tr class="firstRow">
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody class="tableHead fruitList flexTwo">
					<c:forEach var="fruit" items="${Fruits}">
						<tr class="firstRow">
							<td><c:out value="${fruit.name}"></c:out> </td>
							<td>$<c:out value="${fruit.price}"></c:out> </td>
						</tr>
					</c:forEach>
				</tbody>
			</table>
		</div>
	</div>
</body>
</html>