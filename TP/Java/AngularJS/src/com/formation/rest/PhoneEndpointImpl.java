package com.formation.rest;

import java.util.*;

import javax.ws.rs.*;
import javax.ws.rs.core.*;
import javax.ws.rs.core.Response.Status;

import com.formation.entities.*;

@Path("/phones")
public class PhoneEndpointImpl {

	@GET 
    @Path("") 
	public String doGet() {
		String s = "GET rs/phones/all : return phone[]<br/>";
		s+= "GET rs/phones/phone/123 : return phone by phone.id==id<br/>";
		s+= "POST rs/phone : insert a phone<br/>";
		s+= "Phone JSON sample : {<br/>'age':0,<br/>'id':'motorola-xoom-with-wi-fi',<br/>'imageUrl':'img/phones/motorola-xoom-with-wi-fi.0.jpg',<br/>'name':'Motorola XOOM\u2122 with Wi-Fi',<br/>'snippet':'The Next, Next Generation...'}";
		return s;
	}
	
	@GET 
    @Path("/all") 
    @Produces(MediaType.APPLICATION_JSON)
	public List<Phone> doGetAll() {
		List<Phone> l = new ArrayList<Phone>();
		Phone p = new Phone();
		p.setAge(0);
		p.setId("motorola-xoom-with-wi-fi");
		p.setImageUrl("img/phones/motorola-xoom-with-wi-fi.0.jpg");
		p.setName("Motorola XOOM\u2122 with Wi-Fi");
		p.setSnippet("The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb).");
		l.add(p);
		return l;
	}
	
	@GET 
    @Path("/phone/{id}") 
    @Produces(MediaType.APPLICATION_JSON)
	public Phone doGetPhone(@PathParam("id") String id) {
		Phone p = new Phone();
		p.setAge(0);
		p.setId(id);
		p.setImageUrl("img/phones/motorola-xoom-with-wi-fi.0.jpg");
		p.setName("Motorola XOOM\u2122 with Wi-Fi");
		p.setSnippet("The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb).");
		return p;
	}
	
	@POST
	@Path("/phone")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response doPost(Phone p) {
		try {
			// Save p
			String result = "Phone saved : " + p.getId();
			return Response.status(Status.CREATED).entity(result).build();
		}
		catch(Exception e) {
			return Response.status(Status.INTERNAL_SERVER_ERROR).entity(e.getMessage()).build();
		}
	}
	
	

	
}
