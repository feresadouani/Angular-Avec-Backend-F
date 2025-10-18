package com.example.backend.Controllers;

import com.example.backend.Entity.Event;
import com.example.backend.Repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/events")
@CrossOrigin(origins = "http://localhost:4200", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
public class EventController {
    @Autowired
    private EventRepository eventRepository;

    @GetMapping("/all")
    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }
    @PostMapping("/add")
    private ResponseEntity<Event> saveEvent(@RequestBody Event event){
       this.eventRepository.save(event);
       return ResponseEntity.ok(event);
    }
    @DeleteMapping("/delete/{id}")
    private void deleteEvent(@PathVariable Long id){
        this.eventRepository.deleteById(id);
        System.out.println("Event with id "+id+" deleted successfully");
    }
    @PutMapping("/update/{id}")
    public void updateEvent(@PathVariable long id, @RequestBody Event event){
        Event ExistingEvent = eventRepository.findById(id).orElseThrow(
                () -> new IllegalArgumentException("Event with id " + id + " not found")
        );
        ExistingEvent.setTitre(event.getTitre());
        ExistingEvent.setDescription(event.getDescription());
        ExistingEvent.setDate(event.getDate());
        ExistingEvent.setLieu(event.getLieu());
        ExistingEvent.setPrix(event.getPrix());
        ExistingEvent.setOrganisateurId(event.getOrganisateurId());
        ExistingEvent.setImageUrl(event.getImageUrl());
        ExistingEvent.setNbPlaces(event.getNbPlaces());
        ExistingEvent.setNbrLikes(event.getNbrLikes());
        eventRepository.save(ExistingEvent);
        System.out.println("Event with id "+id+" updated successfully");

    }

    @PutMapping("/like/{id}")
    public void AddLike(@PathVariable Long id){
        Event event =eventRepository.findById(id).orElseThrow(
                () -> new IllegalArgumentException("Event with id " + id + " not found")
        );
        event.setNbrLikes(event.getNbrLikes()+1);
        eventRepository.save(event);
    }

    @PutMapping("/updatePalces/{id}")
    public void UpdatePlaces(@PathVariable Long id){
        Event event =eventRepository.findById(id).orElseThrow(
                () -> new IllegalArgumentException("Event with id " + id + " not found")
        );
        event.setNbPlaces(event.getNbPlaces()-1);
        eventRepository.save(event);
    }
}
