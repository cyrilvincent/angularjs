package com.formation.tests;

import java.util.*;

import org.junit.Test;

import src.formation.repositories.*;

import com.formation.entities.*;

import junit.framework.*;


public class PhoneTest extends TestCase {
	
	@Test
	public void testEssai() {
		Phone p = new Phone();
		p.setAge(5);
		Assert.assertEquals(5, p.getAge());
	}
	
	@Test
	public void testPhoneByPrice() {
		PhoneRepository repo = new PhoneRepository();
		List<Phone> l = repo.getByPrice(100);
		Assert.assertTrue(l.size() > 0);
	}
	
	

}
