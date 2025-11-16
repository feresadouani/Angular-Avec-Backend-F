package com.example.backend.Service;

import com.example.backend.Entity.Event;
import com.example.backend.Repository.EventRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
@Slf4j
public class EventServiceImpl implements IEventService{

    EventRepository eventRepository;

    @Override
    public Event addEvent(Event e) {
        return eventRepository.save(e);
    }

    @Override
    public Event updateEvent(Event e) {
        return eventRepository.save(e);
    }

    @Override
    public void deleteEvent(Long id) {
        eventRepository.deleteById(id);
    }

    @Override
    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    @Override
    public Event getEventById(Long id) {
        return eventRepository.findById(id).get();
    }
}
