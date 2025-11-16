package com.example.backend.Controllers;

import com.example.backend.Entity.Event;
import com.example.backend.Repository.EventRepository;
import com.example.backend.Service.IEventService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/events")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:4200", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
public class EventController {

    private IEventService eventService;
    EventRepository eventRepository;

    @GetMapping("/all")
    public List<Event> getAllEvents() {
        return eventService.getAllEvents();
    }
    @PostMapping("/add")
    private Event saveEvent(@RequestBody Event event){
       return this.eventService.addEvent(event);
    }
    @DeleteMapping("/delete/{id}")
    private void deleteEvent(@PathVariable Long id){
        this.eventService.deleteEvent(id);
    }
    @PutMapping("/update/{id}")
    public void updateEvent(@PathVariable long id, @RequestBody Event event){
        this.eventService.updateEvent(event);

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
    @GetMapping("/{id}")
    public Optional<Event> getEventById(@PathVariable Long id) {
        return eventRepository.findById(id);
    }

}
