package com.example.tasklistfinal.ui.main;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;

import androidx.annotation.Nullable;
import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;
import androidx.lifecycle.Observer;
import androidx.lifecycle.ViewModelProviders;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.example.tasklistfinal.R;
import com.example.tasklistfinal.TaskAdapter;
import com.example.tasklistfinal.TaskItem;
import com.example.tasklistfinal.TaskListener;

import java.util.ArrayList;

/**
 * A placeholder fragment containing a simple view.
 */
public class PlaceholderFragment extends Fragment {

    private static final String ARG_SECTION_NUMBER = "section_number";

    private PageViewModel pageViewModel;

    private RecyclerView mRecyclerView;
    private RecyclerView.Adapter mAdapter;
    private RecyclerView.LayoutManager mLayoutManager;

    public static PlaceholderFragment newInstance(int index) {
        PlaceholderFragment fragment = new PlaceholderFragment();
        Bundle bundle = new Bundle();
        bundle.putInt(ARG_SECTION_NUMBER, index);
        fragment.setArguments(bundle);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        pageViewModel = ViewModelProviders.of(this).get(PageViewModel.class);
        int index = 1;
        if (getArguments() != null) {
            index = getArguments().getInt(ARG_SECTION_NUMBER);
        }
        pageViewModel.setIndex(index);
    }

    @Override
    public View onCreateView(
            @NonNull LayoutInflater inflater, ViewGroup container,
            Bundle savedInstanceState) {
        View root = null;

        ArrayList<TaskItem> taskList = new ArrayList<>();
        mAdapter = new TaskAdapter(taskList);

        switch (getArguments().getInt(ARG_SECTION_NUMBER)) {
            case 1: // Liste des taches
                root = inflater.inflate(R.layout.fragment_main, container, false);

                taskList.add(new TaskItem(R.drawable.ic_lens, "Détruire la Terre", "27/04/2020"));
                taskList.add(new TaskItem(R.drawable.ic_lens, "Détruire la Lune", "28/04/2020"));
                taskList.add(new TaskItem(R.drawable.ic_lens, "Détruire l'univers", "29/04/2020"));

                mRecyclerView = root.findViewById(R.id.taskListRecyler);
                mRecyclerView.setHasFixedSize(true);
                mLayoutManager = new LinearLayoutManager(getContext());

                mRecyclerView.setLayoutManager(mLayoutManager);
                mRecyclerView.setAdapter(mAdapter);

                break;

            case 2: // Creer la tache
                root = inflater.inflate(R.layout.fragment_task, container, false);

                // Gestion de la création de la tâche
                Button createTaskBtn = (Button) root.findViewById(R.id.createTaskBtn);
                createTaskBtn.setOnClickListener(new TaskListener(root, taskList, mAdapter));
                break;

            case 3: // Creer la tache
                root = inflater.inflate(R.layout.fragment_calendar, container, false);
                break;
        }


        return root;
    }
}