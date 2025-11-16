package com.example.backend.Service;

import com.example.backend.Entity.Event;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;


public interface IEventService{
    Event addEvent(Event e);
    Event updateEvent(Event e);
    void deleteEvent(Long id);
    List<Event> getAllEvents();
    Event getEventById(Long id);
}
