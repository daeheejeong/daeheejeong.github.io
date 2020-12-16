---
layout: post
title:  JPA @ElementCollection 사용시 유의할 점
subtitle: 
type: "JPA"
blog: true
text: true
author: "Daehee Jeong"
post-header: false
header-img: 
date: 2019-08-29
---

일대다 맵핑을 할 경우에 `@ElementCollection`을 사용할 수 있습니다.  
최근 제가 ElementCollection 어노테이션을 사용하며 착오가 있었던 부분에 대해 정리 하도록 하겠습니다.

## 예시

부모(Parent)와 자식(Child) 클래스가 있다고 가정.

예시) 부모클래스
```java
@Entity
public class Parent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @ElementCollection
    private Children children;
}
```

예시) 자식클래스 일급컬렉션
```java
@Embeddable
public class Children {

    @ElementCollection
    private List<Child> children;
}
```

예시) 자식클래스
```java
@Embeddable
public class Child {
    private String name;
}
```
 
다음과 같이 클래스를 정의했을 때 다음과 같은 스키마를 얻을 수 있습니다.

```sql
create table parent (
    id bigint generated by default as identity,
    name varchar(255),
    primary key (id)
)
    
create table parent_children (
    parent_id bigint not null,
    name varchar(255)
)
    
alter table parent_children 
    add constraint FKdnxvj4hlnv40nix37bpjsvecn 
    foreign key (parent_id) 
    references parent
```

여기서 만약 Child 객체가 Primary Key를 갖게될 경우 Error를 발생합니다.


Embeddable 객체는 Primiray Key를 가질 수 없기 때문입니다. 따라서 자식객체가 ID를 갖는 OneToMany의 관계에서는 `@Entity` 를 사용해야 합니다.